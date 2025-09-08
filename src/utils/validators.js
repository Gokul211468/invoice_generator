import { INVOICE_CONFIG } from '../config/constants.js';

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @returns {Object} Validation result
 */
export const validateRequired = (value) => {
  const isValid = value !== null && value !== undefined && String(value).trim() !== '';
  return {
    isValid,
    errorMessage: isValid ? '' : INVOICE_CONFIG.VALIDATION_MESSAGES.REQUIRED_FIELD
  };
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {Object} Validation result
 */
export const validateEmail = (email) => {
  if (!email) return { isValid: true, errorMessage: '' }; // Optional field
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  
  return {
    isValid,
    errorMessage: isValid ? '' : INVOICE_CONFIG.VALIDATION_MESSAGES.INVALID_EMAIL
  };
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {Object} Validation result
 */
export const validatePhone = (phone) => {
  if (!phone) return { isValid: true, errorMessage: '' }; // Optional field
  
  // Basic phone validation - allows various formats
  const phoneRegex = /^[\+]?[\d\s\(\)\-\.]{10,}$/;
  const isValid = phoneRegex.test(phone);
  
  return {
    isValid,
    errorMessage: isValid ? '' : 'Please enter a valid phone number'
  };
};

/**
 * Validate numeric value
 * @param {any} value - Value to validate
 * @param {Object} options - Validation options (min, max, required)
 * @returns {Object} Validation result
 */
export const validateNumber = (value, options = {}) => {
  const { min, max, required = false } = options;
  
  // Check if required
  if (required && (value === '' || value === null || value === undefined)) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.REQUIRED_FIELD
    };
  }
  
  // Allow empty for optional fields
  if (!required && (value === '' || value === null || value === undefined)) {
    return { isValid: true, errorMessage: '' };
  }
  
  const numValue = parseFloat(value);
  
  // Check if it's a valid number
  if (isNaN(numValue)) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.INVALID_NUMBER
    };
  }
  
  // Check minimum value
  if (min !== undefined && numValue < min) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.MIN_VALUE.replace('{min}', min)
    };
  }
  
  // Check maximum value
  if (max !== undefined && numValue > max) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.MAX_VALUE.replace('{max}', max)
    };
  }
  
  return { isValid: true, errorMessage: '' };
};

/**
 * Validate date
 * @param {string} date - Date string to validate
 * @param {Object} options - Validation options
 * @returns {Object} Validation result
 */
export const validateDate = (date, options = {}) => {
  const { required = false, future = false, past = false } = options;
  
  // Check if required
  if (required && !date) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.REQUIRED_FIELD
    };
  }
  
  // Allow empty for optional fields
  if (!required && !date) {
    return { isValid: true, errorMessage: '' };
  }
  
  const dateObj = new Date(date);
  
  // Check if valid date
  if (isNaN(dateObj.getTime())) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.INVALID_DATE
    };
  }
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dateObj.setHours(0, 0, 0, 0);
  
  // Check if must be future date
  if (future && dateObj <= today) {
    return {
      isValid: false,
      errorMessage: 'Date must be in the future'
    };
  }
  
  // Check if must be past date
  if (past && dateObj >= today) {
    return {
      isValid: false,
      errorMessage: 'Date must be in the past'
    };
  }
  
  return { isValid: true, errorMessage: '' };
};

/**
 * Validate invoice number format
 * @param {string} invoiceNumber - Invoice number to validate
 * @returns {Object} Validation result
 */
export const validateInvoiceNumber = (invoiceNumber) => {
  if (!invoiceNumber) {
    return {
      isValid: false,
      errorMessage: INVOICE_CONFIG.VALIDATION_MESSAGES.REQUIRED_FIELD
    };
  }
  
  // Basic format validation - alphanumeric with hyphens
  const invoiceRegex = /^[A-Za-z0-9\-_]+$/;
  const isValid = invoiceRegex.test(invoiceNumber);
  
  return {
    isValid,
    errorMessage: isValid ? '' : 'Invoice number can only contain letters, numbers, hyphens, and underscores'
  };
};

/**
 * Validate invoice item
 * @param {Object} item - Invoice item to validate
 * @returns {Object} Validation result with field-specific errors
 */
export const validateInvoiceItem = (item) => {
  const errors = {};
  
  // Validate name
  const nameValidation = validateRequired(item.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.errorMessage;
  }
  
  // Validate quantity
  const quantityValidation = validateNumber(item.quantity, {
    required: true,
    min: INVOICE_CONFIG.MIN_QUANTITY,
    max: INVOICE_CONFIG.MAX_QUANTITY
  });
  if (!quantityValidation.isValid) {
    errors.quantity = quantityValidation.errorMessage;
  }
  
  // Validate price
  const priceValidation = validateNumber(item.price, {
    required: true,
    min: INVOICE_CONFIG.MIN_PRICE,
    max: INVOICE_CONFIG.MAX_PRICE
  });
  if (!priceValidation.isValid) {
    errors.price = priceValidation.errorMessage;
  }
  
  // Validate tax rate
  if (item.taxRate !== undefined && item.taxRate !== '') {
    const taxValidation = validateNumber(item.taxRate, {
      required: false,
      min: INVOICE_CONFIG.MIN_TAX_RATE,
      max: INVOICE_CONFIG.MAX_TAX_RATE
    });
    if (!taxValidation.isValid) {
      errors.taxRate = taxValidation.errorMessage;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validate customer details
 * @param {Object} customer - Customer details to validate
 * @returns {Object} Validation result with field-specific errors
 */
export const validateCustomerDetails = (customer) => {
  const errors = {};
  
  // Validate customer name (required)
  const nameValidation = validateRequired(customer.customerName);
  if (!nameValidation.isValid) {
    errors.customerName = nameValidation.errorMessage;
  }
  
  // Validate email (optional but must be valid if provided)
  const emailValidation = validateEmail(customer.customerEmail);
  if (!emailValidation.isValid) {
    errors.customerEmail = emailValidation.errorMessage;
  }
  
  // Validate phone (optional but must be valid if provided)
  const phoneValidation = validatePhone(customer.customerPhone);
  if (!phoneValidation.isValid) {
    errors.customerPhone = phoneValidation.errorMessage;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validate complete invoice
 * @param {Object} invoice - Complete invoice data to validate
 * @returns {Object} Validation result with field-specific errors
 */
export const validateInvoice = (invoice) => {
  const errors = {};
  
  // Validate invoice number
  const invoiceNumberValidation = validateInvoiceNumber(invoice.invoiceNumber);
  if (!invoiceNumberValidation.isValid) {
    errors.invoiceNumber = invoiceNumberValidation.errorMessage;
  }
  
  // Validate invoice date
  const dateValidation = validateDate(invoice.date, { required: true });
  if (!dateValidation.isValid) {
    errors.date = dateValidation.errorMessage;
  }
  
  // Validate due date (optional, but must be future if provided)
  if (invoice.dueDate) {
    const dueDateValidation = validateDate(invoice.dueDate, { future: true });
    if (!dueDateValidation.isValid) {
      errors.dueDate = dueDateValidation.errorMessage;
    }
  }
  
  // Validate customer details
  const customerValidation = validateCustomerDetails(invoice);
  Object.assign(errors, customerValidation.errors);
  
  // Validate items
  if (!invoice.items || invoice.items.length === 0) {
    errors.items = 'At least one item is required';
  } else {
    invoice.items.forEach((item, index) => {
      const itemValidation = validateInvoiceItem(item);
      if (!itemValidation.isValid) {
        errors[`item_${index}`] = itemValidation.errors;
      }
    });
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validate field based on validation rules
 * @param {any} value - Value to validate
 * @param {Object} rules - Validation rules
 * @returns {Object} Validation result
 */
export const validateField = (value, rules = {}) => {
  const { required, email, phone, number, date, min, max, future, past } = rules;
  
  // Required validation
  if (required) {
    const requiredValidation = validateRequired(value);
    if (!requiredValidation.isValid) {
      return requiredValidation;
    }
  }
  
  // Skip other validations if value is empty and not required
  if (!value && !required) {
    return { isValid: true, errorMessage: '' };
  }
  
  // Email validation
  if (email) {
    return validateEmail(value);
  }
  
  // Phone validation
  if (phone) {
    return validatePhone(value);
  }
  
  // Number validation
  if (number) {
    return validateNumber(value, { min, max, required });
  }
  
  // Date validation
  if (date) {
    return validateDate(value, { required, future, past });
  }
  
  // Default: valid
  return { isValid: true, errorMessage: '' };
};
