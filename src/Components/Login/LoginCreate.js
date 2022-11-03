import React from 'react';
import { USER_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import { useUserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      console.log(await response.json());
      if (response.ok) userLogin(username.value, password.value);
    }
  };

  return (
    <section className='animeLeft'>
      <h1 className='title'>cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
