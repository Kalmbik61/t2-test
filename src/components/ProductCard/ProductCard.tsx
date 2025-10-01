import React from "react";
import { useProductCard } from "../../hooks/useProductCard";
import { ProductCardProps } from "../../types/product";
import styles from "./ProductCard.module.scss";
import catImage from "../../assets/cat.png";

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { taste, weight, portions, gifts, description, available } = product;

  const { selected, state, handleClick, handleMouseEnter, handleMouseLeave } =
    useProductCard(available);

  const giftsText = gifts.join("\n");

  const cardClassName = [styles.card, styles[`card--${state}`]]
    .filter(Boolean)
    .join(" ");

  const getFooterText = (): React.ReactNode => {
    if (!available) {
      return `Печалька, ${taste} закончился.`;
    }

    if (selected) {
      return description;
    }

    return (
      <>
        Чего сидишь? Порадуй котэ,{" "}
        <button
          className={styles.buyButton}
          onClick={handleClick}
          type="button"
          aria-label={`Купить ${taste}`}
        >
          купи
        </button>
        .
      </>
    );
  };

  const getTagline = (): string => {
    if (!available && selected) {
      return "Котэ не одобряет?";
    }
    return "Сказочное заморское яство";
  };

  return (
    <div
      className={styles.productCard}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cardClassName}>
        <div className={styles.background} />
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.tagline}>{getTagline()}</p>
            <h2 className={styles.title}>Нямушка</h2>
            <p className={styles.subtitle}>{taste}</p>

            <div className={styles.details}>
              <p className={styles.portions}>
                <strong>{portions}</strong> порций
              </p>
              <p className={styles.gift}>{giftsText}</p>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img src={catImage} alt="Кот" className={styles.image} />
          </div>

          <div className={styles.badge}>
            <span className={styles.weight}>
              {weight.toString().replace(".", ",")}
            </span>
            <span className={styles.unit}>кг</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>{getFooterText()}</p>
      </div>
    </div>
  );
};
