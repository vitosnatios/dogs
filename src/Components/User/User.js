import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStates from './UserStates';
import { useUserContext } from '../../UserContext';

const User = () => {
  const { data } = useUserContext();

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStates />} />
      </Routes>
    </section>
  );
};

export default User;
