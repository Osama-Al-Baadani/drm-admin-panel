import React from 'react'
import Loader from './Loader'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 focus:ring-gray-500',
    success: 'bg-success-500 hover:bg-success-600 text-white focus:ring-success-500',
    danger: 'bg-danger-500 hover:bg-danger-600 text-white focus:ring-danger-500',
    outline: 'border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader size="sm" color={variant === 'primary' || variant === 'success' || variant === 'danger' ? 'white' : 'gray'} />
          <span className="mr-2">جاري التحميل...</span>
        </>
      ) : (
        <>
          {icon && <span className="ml-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  )
}

export default Button
