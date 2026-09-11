export const validateRegistrationForm = (formData) => {
  const errors = {};

  if (!formData.childName || !formData.childName.trim()) {
    errors.childName = 'Please enter your child\'s name';
  }

  if (!formData.childAge || formData.childAge === '') {
    errors.childAge = 'Please enter child\'s age';
  } else {
    const age = parseInt(formData.childAge, 10);
    if (isNaN(age)) {
      errors.childAge = 'Please enter a valid number';
    }
  }

  if (!formData.parentName || !formData.parentName.trim()) {
    errors.parentName = 'Please enter parent\'s name';
  }

  if (!formData.parentPhone || !formData.parentPhone.trim()) {
    errors.parentPhone = 'Please enter mobile number';
  } else {
    const phoneRegex = /^[6-9]\d{9}$/;
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
  return numAge >= 3 && numAge <= 5;
};
