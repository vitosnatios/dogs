import React, { useEffect, useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === '/conta/estatisticas' && setTitle('Estatístias');
    pathname === '/conta' && setTitle('Minha Conta');
    pathname === '/conta/postar' && setTitle('Poste Sua Foto');
  }, [pathname]);
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
