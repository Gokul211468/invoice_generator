import React from 'react';

/**
 * Card component for wrapping content in a styled container
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.action - Action element (e.g., button) in header
 * @param {boolean} props.noPadding - Whether to remove default padding
 * @param {string} props.variant - Card variant: 'default', 'outlined', 'elevated'
 * @returns {React.Component} Card component
 */
const Card = ({
  title,
  subtitle,
  children,
  className = '',
  action,
  noPadding = false,
  variant = 'default',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg';
  
  const variantClasses = {
    default: 'border border-gray-200',
    outlined: 'border-2 border-gray-300',
    elevated: 'shadow-lg border border-gray-100'
  };

  const cardClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    className
  ].filter(Boolean).join(' ');

  const contentClasses = noPadding ? '' : 'p-6';

  return (
    <div className={cardClasses} {...props}>
      {(title || subtitle || action) && (
        <div className={`${noPadding ? 'p-6 pb-0' : 'pb-4'} ${title && subtitle ? 'space-y-1' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {title && (
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600 mt-1">
                  {subtitle}
                </p>
              )}
            </div>
            {action && (
              <div className="flex-shrink-0 ml-4">
                {action}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
};

/**
 * Card Header component for more complex layouts
 */
export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Body component
 */
export const CardBody = ({ children, className = '', noPadding = false, ...props }) => {
  const classes = noPadding ? className : `p-6 ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

/**
 * Card Footer component
 */
export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
