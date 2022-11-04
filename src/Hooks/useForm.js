import { useState } from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa possuir ao menos 8 caracteres, 1 minúsculo, 1 maiúsculo e um dígito',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    if (type === false) return true;
    if (!value.length) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const onChange = ({ target }) => {
    error && validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
