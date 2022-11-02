import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

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
        <Input label='Usuário' type='text' name='username' />
        <Input label='Senha' type='password' name='password' />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastros</Link>
    </section>
  );
};

export default LoginForm;
