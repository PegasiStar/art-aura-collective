export interface MerchItem {
  id: string;
  title: string;
  price: string;
  image: string;
  category: "Apparel" | "Accessories" | "Prints";
  link: string;
}

export const merchItems: MerchItem[] = [
  {
    id: "1",
    title: "Fwog Logo Hoodie",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    category: "Apparel",
    link: "https://www.etsy.com/shop/MaybeeAStore",
  },
  {
    id: "2",
    title: "Swamp Vibes T-Shirt",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "Apparel",
    link: "https://www.etsy.com/shop/MaybeeAStore",
  },
  {
    id: "3",
    title: "Lily Pad Enamel Pin Set",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    category: "Accessories",
    link: "https://www.etsy.com/shop/MaybeeAStore",
  },
  {
    id: "4",
    title: "Cozy Frog Art Print",
    price: "$15.00",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop",
    category: "Prints",
    link: "https://www.etsy.com/shop/MaybeeAStore",
  },
  {
    id: "5",
    title: "Nature Spirits Sticker Pack",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400&h=500&fit=crop",
    category: "Accessories",
    link: "https://www.etsy.com/shop/MaybeeAStore",
  },
  {
    id: "6",
    title: "The Flipside Tote Bag",
    price: "$22.00",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=500&fit=crop",
    category: "Accessories",
    link: "https://www.etsy.com/shop/MaybeeAStore",
  },
];

export const merchCategories = ["All", "Apparel", "Accessories", "Prints"] as const;
