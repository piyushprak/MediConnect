import React, { useState, useRef, useEffect } from 'react'

export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>
}

export function DropdownMenuTrigger({ asChild, children }) {
  return asChild ? children : <button>{children}</button>
}

export function DropdownMenuContent({ children, className = '', align = 'end', forceMount }) {
  return (
    <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 bg-white border rounded shadow-lg z-50 ${className}`}>
      {children}
    </div>
  )
}

export function DropdownMenuItem({ children, onClick, className = '' }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${className}`}
      tabIndex={0}
      role="menuitem"
    >
      {children}
    </div>
  )
}

export function DropdownMenuSeparator() {
  return <div className="border-t my-1" />
}