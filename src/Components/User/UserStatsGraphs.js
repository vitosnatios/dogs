import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './UserStatesGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      data.reduce((prev, cur) => {
        return Number(prev.acessos) + Number(cur.acessos);
      })
    );
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
