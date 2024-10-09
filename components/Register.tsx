import React from "react";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  return (
    <section>
      <h1>Cadastro</h1>
      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="name"
            placeholder="Digite seu nome"
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={formData.password}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirme a sua senha</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirme a sua senha"
            value={formData.confirmPassword}
          />
        </div>
        <button>Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <a href="/login">Cadastre-se</a>
      </p>
    </section>
  );
};

export default Register;
