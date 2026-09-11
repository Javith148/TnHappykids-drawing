export const validateRegistrationForm = (formData) => {
  const errors = {};

  if (!formData.childName || !formData.childName.trim()) {
    errors.childName = 'Please enter your child\'s name';
  }

  if (!formData.childDob || !formData.childDob.trim()) {
    errors.childDob = 'Please select child\'s date of birth';
  } else {
    const dobYear = new Date(formData.childDob).getFullYear();
    if (isNaN(dobYear) || dobYear < 2021 || dobYear > 2025) {
      errors.childDob = 'Date of birth must be between year 2021 and 2025 (Max 5 years)';
    }
  }

  if (!formData.childAge || formData.childAge === '') {
    errors.childAge = 'Please enter child\'s age';
  } else {
    const age = parseInt(formData.childAge, 10);
    if (isNaN(age) || age < 1) {
      errors.childAge = 'Please enter a valid age';
    }
  }

  if (!formData.parentName || !formData.parentName.trim()) {
    errors.parentName = 'Please enter parent\'s name';
  }

  if (!formData.parentPhone || !formData.parentPhone.trim()) {
    errors.parentPhone = 'Please enter mobile number';
  } else {
    const cleanPhone = formData.parentPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errors.parentPhone = 'Please enter a valid 10-digit mobile number';
    }
  }

  if (!formData.parentEmail || !formData.parentEmail.trim()) {
    errors.parentEmail = 'Please enter email address';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.parentEmail.trim())) {
      errors.parentEmail = 'Please enter a valid email address';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const isAgeEligible = (age) => {
  const numAge = parseInt(age, 10);
  return !isNaN(numAge) && numAge <= 5;
};
