import React from 'react';
import { ProductCard } from '../ProductCard';
import { products } from '../../data/products';
import styles from './ProductList.module.scss';

export const ProductList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ты сегодня покормил кота?</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
