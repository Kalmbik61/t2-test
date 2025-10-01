import React from 'react';
import { ProductList } from './components/ProductList';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ProductList />
    </div>
  );
};

export default App;
