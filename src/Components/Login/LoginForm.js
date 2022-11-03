import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const res = await fetch(url, options);
      const json = await res.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) getUser(token);
  }, []);

  return (
    <section onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastros</Link>
    </section>
  );
};

export default LoginForm;
