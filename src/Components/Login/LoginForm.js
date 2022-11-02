import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    const logar = async () => {
      const res = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const json = await res.json();
      console.log(json);
    };
    logar();
  };
  return (
    <section onSubmit={onSubmit}>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to='/login/criar'>Cadastros</Link>
    </section>
  );
};

export default LoginForm;
