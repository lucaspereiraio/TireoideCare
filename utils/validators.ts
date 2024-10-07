// Email validation function
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    return "O email é obrigatório.";
  } else if (!emailRegex.test(email)) {
    return "Email inválido.";
  }
  return null;
};

// Password validation function
const validatePassword = (password: string) => {
  if (!password.trim()) {
    return "A senha é obrigatória.";
  } else if (password.length < 6) {
    return "A senha deve ter no mínimo 6 caracteres.";
  }
  return null;
};

//Login validation
export const validateLogin = (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};

  const emailError = validateEmail(email);
  if (emailError) {
    errors.email = emailError;
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return errors;
};

// export const validateRegistration = (
//   name: string,
//   email: string,
//   password: string,
//   confirmpassword: string
// ) => {};
