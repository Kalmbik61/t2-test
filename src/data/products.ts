import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'foiegras',
    taste: 'с фуа-гра',
    weight: 0.5,
    portions: 10,
    gifts: ['мышь в подарок'],
    description: 'Печень утки разварная с артишоками.',
    color: 'blue',
    available: true
  },
  {
    id: 'fish',
    taste: 'с рыбой',
    weight: 2,
    portions: 40,
    gifts: ['2 мыши в подарок'],
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    color: 'pink',
    available: true
  },
  {
    id: 'chicken',
    taste: 'с курой',
    weight: 5,
    portions: 100,
    gifts: ['5 мышей в подарок', 'заказчик доволен'],
    description: 'Филе из цыплят с трюфелями в бульоне.',
    color: 'gray',
    available: false
  }
];
