import React from "react";

const Login = () => {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Digite sua senha" />
        </div>
        <button>Login</button>
      </form>
      <p>
        Ainda não tem uma conta? <a href="/register">Cadastre-se</a>
      </p>
    </section>
  );
};

export default Login;
