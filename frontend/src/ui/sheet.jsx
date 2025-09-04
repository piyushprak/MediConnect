import React, { useState } from 'react'

export function Sheet({ open, onOpenChange, children }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          {children}
        </div>
      )}
    </>
  )
}

export function SheetTrigger({ asChild, children }) {
  // This component should be used with a parent managing open state
  return asChild ? children : <button>{children}</button>
}

export function SheetContent({ children, side = 'right', className = '' }) {
  return (
    <div
      className={`bg-white h-full w-80 shadow-lg ${side === 'right' ? 'ml-auto' : 'mr-auto'} ${className}`}
      style={{ maxWidth: '100vw' }}
    >
      {children}
    </div>
  )
}

export function SheetClose({ asChild, children }) {
  // This component should be used with a parent managing open state
  return asChild ? children : <button>{children}</button>
}
