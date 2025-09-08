import React from 'react';

/**
 * FormField component for consistent form field styling
 * @param {Object} props - Component props
 * @param {string} props.label - Field label
 * @param {string} props.error - Error message to display
 * @param {string} props.hint - Hint text to display
 * @param {React.ReactNode} props.children - Form input element
 * @param {boolean} props.required - Whether field is required
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.labelClassName - Additional CSS classes for label
 * @returns {React.Component} FormField component
 */
const FormField = ({
  label,
  error,
  hint,
  children,
  required = false,
  className = '',
  labelClassName = '',
  ...props
}) => {
  const fieldId = React.useId();
  
  // Clone children to add field ID and error state
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id: child.props.id || fieldId,
        'aria-describedby': error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined,
        'aria-invalid': error ? 'true' : undefined,
        className: `${child.props.className || ''} ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`.trim()
      });
    }
    return child;
  });

  return (
    <div className={`space-y-1 ${className}`} {...props}>
      {label && (
        <label
          htmlFor={fieldId}
          className={`block text-sm font-medium text-gray-700 ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div>
        {childrenWithProps}
      </div>
      
      {error && (
        <p id={`${fieldId}-error`} className="text-sm text-red-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {error}
        </p>
      )}
      
      {hint && !error && (
        <p id={`${fieldId}-hint`} className="text-sm text-gray-500 flex items-center">
          <svg
            className="w-4 h-4 mr-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            ></path>
          </svg>
          {hint}
        </p>
      )}
    </div>
  );
};

/**
 * Input component with consistent styling
 */
export const Input = React.forwardRef(({ 
  className = '', 
  error = false,
  ...props 
}, ref) => {
  const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors';
  const errorClasses = error 
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-blue-500 focus:border-transparent';
  
  const classes = `${baseClasses} ${errorClasses} ${className}`.trim();
  
  return <input ref={ref} className={classes} {...props} />;
});

Input.displayName = 'Input';

/**
 * Textarea component with consistent styling
 */
export const Textarea = React.forwardRef(({ 
  className = '', 
  error = false,
  rows = 3,
  ...props 
}, ref) => {
  const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors resize-vertical';
  const errorClasses = error 
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-blue-500 focus:border-transparent';
  
  const classes = `${baseClasses} ${errorClasses} ${className}`.trim();
  
  return <textarea ref={ref} rows={rows} className={classes} {...props} />;
});

Textarea.displayName = 'Textarea';

/**
 * Select component with consistent styling
 */
export const Select = React.forwardRef(({ 
  className = '', 
  error = false,
  children,
  ...props 
}, ref) => {
  const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors bg-white';
  const errorClasses = error 
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-blue-500 focus:border-transparent';
  
  const classes = `${baseClasses} ${errorClasses} ${className}`.trim();
  
  return (
    <select ref={ref} className={classes} {...props}>
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export default FormField;
