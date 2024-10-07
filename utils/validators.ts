// export const validateRegistration = (
//   name: string,
//   email: string,
//   password: string,
//   confirmpassword: string
// ) => {};

export const validateLogin = (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    errors.email = "O email é obrigatório!";
  } else if (!emailRegex.test(email)) {
    errors.email = "Email inválido.";
  }

  if (!password.trim()) {
    errors.password = "A senha é obrigatória.";
  }

  return errors;
};
