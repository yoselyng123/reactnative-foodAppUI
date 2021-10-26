const popularData = [
  {
    id: 1,
    image: require('../images/pizza1.png'),
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: 11.99,
    size: 'Large 16"',
    crust: 'Thin crust',
    deliveryTime: '35 min',
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/ham.png'),
      },
      {
        id: '2',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
    ],
  },
  {
    id: 2,
    image: require('../images/pizza2.png'),
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '4.0',
    price: 7.99,
    size: 'Medium 14"',
    crust: 'Thin crust',
    deliveryTime: '30 min',
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/ham.png'),
      },
      {
        id: '2',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: 3,
    image: require('../images/pizza3.png'),
    title: 'Pepperoni Pizza',
    weight: '200 gr',
    rating: '5.0',
    price: 5.99,
    size: 'Small 10"',
    crust: 'Thick crust',
    deliveryTime: '20 min',
    ingredients: [
      {
        id: '1',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '3',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
];

export default popularData;
