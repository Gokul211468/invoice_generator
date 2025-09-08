import { useState, useCallback } from 'react';
import { validateField } from '../utils/validators.js';

/**
 * Custom hook for form validation
 * @param {Object} initialErrors - Initial error state
 * @returns {Object} Validation utilities
 */
const useFormValidation = (initialErrors = {}) => {
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});

  /**
   * Validate a single field
   * @param {string} fieldName - Name of the field to validate
   * @param {any} value - Value to validate
   * @param {Object} rules - Validation rules
   */
  const validateSingleField = useCallback((fieldName, value, rules = {}) => {
    const result = validateField(value, rules);
    
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: result.isValid ? '' : result.errorMessage
    }));

    setTouched(prevTouched => ({
      ...prevTouched,
      [fieldName]: true
    }));

    return result.isValid;
  }, []);

  /**
   * Validate multiple fields at once
   * @param {Object} fieldsData - Object with field names as keys and {value, rules} as values
   * @returns {boolean} True if all fields are valid
   */
  const validateMultipleFields = useCallback((fieldsData) => {
    const newErrors = {};
    const newTouched = {};
    let isFormValid = true;

    Object.entries(fieldsData).forEach(([fieldName, { value, rules = {} }]) => {
      const result = validateField(value, rules);
      
      newErrors[fieldName] = result.isValid ? '' : result.errorMessage;
      newTouched[fieldName] = true;
      
      if (!result.isValid) {
        isFormValid = false;
      }
    });

    setErrors(prevErrors => ({ ...prevErrors, ...newErrors }));
    setTouched(prevTouched => ({ ...prevTouched, ...newTouched }));

    return isFormValid;
  }, []);

  /**
   * Clear error for a specific field
   * @param {string} fieldName - Name of the field to clear error for
   */
  const clearError = useCallback((fieldName) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: ''
    }));
  }, []);

  /**
   * Clear all errors
   */
  const clearAllErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  /**
   * Set error for a specific field
   * @param {string} fieldName - Name of the field
   * @param {string} errorMessage - Error message to set
   */
  const setFieldError = useCallback((fieldName, errorMessage) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: errorMessage
    }));
    
    setTouched(prevTouched => ({
      ...prevTouched,
      [fieldName]: true
    }));
  }, []);

  /**
   * Set multiple errors at once
   * @param {Object} errorObj - Object with field names as keys and error messages as values
   */
  const setMultipleErrors = useCallback((errorObj) => {
    setErrors(prevErrors => ({ ...prevErrors, ...errorObj }));
    
    const touchedFields = Object.keys(errorObj).reduce((acc, fieldName) => {
      acc[fieldName] = true;
      return acc;
    }, {});
    
    setTouched(prevTouched => ({ ...prevTouched, ...touchedFields }));
  }, []);

  /**
   * Check if form has any errors
   * @returns {boolean} True if form has errors
   */
  const hasErrors = useCallback(() => {
    return Object.values(errors).some(error => error !== '');
  }, [errors]);

  /**
   * Check if a specific field has been touched
   * @param {string} fieldName - Name of the field
   * @returns {boolean} True if field has been touched
   */
  const isFieldTouched = useCallback((fieldName) => {
    return touched[fieldName] || false;
  }, [touched]);

  /**
   * Check if a specific field has an error
   * @param {string} fieldName - Name of the field
   * @returns {boolean} True if field has an error
   */
  const hasFieldError = useCallback((fieldName) => {
    return Boolean(errors[fieldName]);
  }, [errors]);

  /**
   * Get error message for a specific field
   * @param {string} fieldName - Name of the field
   * @returns {string} Error message or empty string
   */
  const getFieldError = useCallback((fieldName) => {
    return errors[fieldName] || '';
  }, [errors]);

  /**
   * Reset form validation state
   */
  const reset = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  /**
   * Mark field as touched without validation
   * @param {string} fieldName - Name of the field
   */
  const touchField = useCallback((fieldName) => {
    setTouched(prevTouched => ({
      ...prevTouched,
      [fieldName]: true
    }));
  }, []);

  /**
   * Check if form is ready for submission (no errors and has touched fields)
   * @returns {boolean} True if form is ready for submission
   */
  const isFormReady = useCallback(() => {
    const hasTouchedFields = Object.values(touched).some(Boolean);
    return hasTouchedFields && !hasErrors();
  }, [touched, hasErrors]);

  return {
    // State
    errors,
    touched,
    
    // Validation functions
    validateField: validateSingleField,
    validateMultipleFields,
    
    // Error management
    clearError,
    clearAllErrors,
    setFieldError,
    setMultipleErrors,
    
    // Utility functions
    hasErrors,
    isFieldTouched,
    hasFieldError,
    getFieldError,
    touchField,
    isFormReady,
    
    // Reset function
    reset
  };
};

export default useFormValidation;
