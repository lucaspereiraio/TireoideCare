import React from "react";

const Register = () => {
  return (
    <section>
      <h1>Cadastro</h1>
      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input id="name" type="name" placeholder="Digite seu nome" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Digite sua senha" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirme a sua senha</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirme a sua senha"
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
