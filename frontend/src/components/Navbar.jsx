import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet'
import { User, Calendar, LogOut, Menu, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/doctors', label: 'ALL DOCTORS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className='cursor-pointer transition-transform hover:scale-105'
          >
            <img className='h-20 w-auto' src={assets.logo} alt="MediConnect" />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-in slide-in-from-left-full duration-300' />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* User Actions */}
          <div className='flex items-center gap-4'>
            {token && userData ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-auto px-3 hover:bg-accent/50 transition-colors">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={userData.image} alt={userData.name || "User"} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {userData.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userData.image} alt={userData.name || "User"} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {userData.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userData.name || 'User'}</p>
                      <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => navigate('/my-profile')}
                    className="cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigate('/my-appointments')}
                    className="cursor-pointer"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>My Appointments</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={logout}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={() => navigate('/login')} 
                className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Create account
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={showMenu} onOpenChange={setShowMenu}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center pb-6 border-b">
                    <img src={assets.logo} className='h-20 w-auto' alt="MediConnect" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6">
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <SheetClose key={item.path} asChild>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                                isActive
                                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile User Actions */}
                  {token && userData ? (
                    <div className="border-t pt-6 space-y-3">
                      <div className="flex items-center gap-3 px-4 py-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={userData.image} alt={userData.name || "User"} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {userData.name?.charAt(0) || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{userData.name || 'User'}</p>
                          <p className="text-sm text-muted-foreground">{userData.email}</p>
                        </div>
                      </div>
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          onClick={() => navigate('/my-profile')}
                          className="w-full justify-start"
                        >
                          <User className="mr-2 h-4 w-4" />
                          My Profile
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          onClick={() => navigate('/my-appointments')}
                          className="w-full justify-start"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          My Appointments
                        </Button>
                      </SheetClose>
                      <Button
                        variant="ghost"
                        onClick={logout}
                        className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="border-t pt-6">
                      <SheetClose asChild>
                        <Button 
                          onClick={() => navigate('/login')} 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium shadow-lg"
                        >
                          Create account
                        </Button>
                      </SheetClose>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      {/* <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style> */}
    </nav>
  )
}
export default Navbar