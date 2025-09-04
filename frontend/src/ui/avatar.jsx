import React from 'react'

export function Avatar({ className = '', children }) {
  return (
    <div className={`rounded-full overflow-hidden bg-gray-200 ${className}`}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />
}

export function AvatarFallback({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-center w-full h-full text-lg font-bold text-gray-600 ${className}`}>
      {children}
    </div>
  )
}