import React from 'react';

/**
 * LoadingSpinner component for showing loading states
 * @param {Object} props - Component props
 * @param {string} props.size - Spinner size: 'sm', 'md', 'lg', 'xl'
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.color - Spinner color: 'blue', 'gray', 'white', 'green', 'red'
 * @param {string} props.text - Loading text to display
 * @param {boolean} props.overlay - Whether to show as overlay
 * @param {boolean} props.center - Whether to center the spinner
 * @returns {React.Component} LoadingSpinner component
 */
const LoadingSpinner = ({
  size = 'md',
  className = '',
  color = 'blue',
  text = '',
  overlay = false,
  center = false,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'text-blue-600',
    gray: 'text-gray-600',
    white: 'text-white',
    green: 'text-green-600',
    red: 'text-red-600',
    indigo: 'text-indigo-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600'
  };

  const spinnerClasses = [
    'animate-spin',
    sizeClasses[size] || sizeClasses.md,
    colorClasses[color] || colorClasses.blue,
    className
  ].filter(Boolean).join(' ');

  const SpinnerSVG = () => (
    <svg
      className={spinnerClasses}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  const SpinnerContent = () => (
    <div className={`flex items-center ${text ? 'space-x-2' : ''}`}>
      <SpinnerSVG />
      {text && (
        <span className={`text-sm font-medium ${colorClasses[color] || colorClasses.blue}`}>
          {text}
        </span>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <SpinnerContent />
        </div>
      </div>
    );
  }

  if (center) {
    return (
      <div className="flex items-center justify-center p-4">
        <SpinnerContent />
      </div>
    );
  }

  return <SpinnerContent />;
};

/**
 * Simple dot spinner for minimal loading states
 */
export const DotSpinner = ({ 
  className = '', 
  size = 'md',
  color = 'blue'
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const colorClasses = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    white: 'bg-white',
    green: 'bg-green-600',
    red: 'bg-red-600'
  };

  const dotClass = `${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`;

  return (
    <div className={`flex space-x-1 ${className}`}>
      <div className={dotClass} style={{ animationDelay: '0ms' }}></div>
      <div className={dotClass} style={{ animationDelay: '150ms' }}></div>
      <div className={dotClass} style={{ animationDelay: '300ms' }}></div>
    </div>
  );
};

/**
 * Skeleton loader for content placeholders
 */
export const SkeletonLoader = ({ 
  lines = 3, 
  className = '',
  animated = true 
}) => {
  const baseClasses = 'bg-gray-200 rounded';
  const animationClasses = animated ? 'animate-pulse' : '';
  
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} ${animationClasses}`}
          style={{
            height: '1rem',
            width: index === lines - 1 ? '60%' : '100%'
          }}
        ></div>
      ))}
    </div>
  );
};

/**
 * Loading button state
 */
export const LoadingButton = ({
  loading = false,
  children,
  disabled,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`relative ${className}`}
      {...props}
    >
      <span className={loading ? 'opacity-0' : ''}>
        {children}
      </span>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </div>
      )}
    </button>
  );
};

export default LoadingSpinner;
