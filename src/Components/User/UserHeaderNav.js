import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useUserContext();

  return (
    <nav className={styles.nav}>
      <NavLink to='/conta' end>
        <MinhasFotos />
        {mobile && ' Minhas Fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas /> {mobile && ' Estatísticas'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <AdicionarFoto />
        {mobile && ' Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && ' Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
