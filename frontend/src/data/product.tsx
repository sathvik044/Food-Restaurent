export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export const topProducts: Product[] = [
  {
    id: 1,
    name: "Burger Deluxe",
    price: 199,
    rating: 4.5,
    image: "https://source.unsplash.com/300x200/?burger"
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: 299,
    rating: 4.7,
    image: "https://source.unsplash.com/300x200/?pizza"
  },
  {
    id: 3,
    name: "Chicken Noodles",
    price: 149,
    rating: 4.3,
    image: "https://source.unsplash.com/300x200/?noodles"
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 99,
    rating: 4.6,
    image: "https://source.unsplash.com/300x200/?coffee"
  }
];
