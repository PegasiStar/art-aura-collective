export interface Artwork {
  id: string;
  title: string;
  price: string;
  image: string;
  category: "Emotes" | "Wallpapers" | "Badges" | "Art";
  link: string;
  soldCount?: number;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Flippen' Frogs Emote Pack 1",
    price: "$11.86",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop",
    category: "Emotes",
    link: "https://ko-fi.com/s/8f8f8f8f8f",
    soldCount: 15,
    featured: true,
  },
  {
    id: "2",
    title: "Busy Beaver Emote Pack 1",
    price: "$11.86",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=400&fit=crop",
    category: "Emotes",
    link: "https://ko-fi.com/s/9f9f9f9f9f",
    soldCount: 8,
    featured: true,
  },
  {
    id: "3",
    title: "Baby Capybara Emote Pack 1",
    price: "$11.86",
    image: "https://images.unsplash.com/photo-1557431177-36141475c676?w=400&h=400&fit=crop",
    category: "Emotes",
    link: "https://ko-fi.com/s/7f7f7f7f7f",
    soldCount: 12,
    featured: true,
  },
  {
    id: "4",
    title: "Boba Toad Phone Wallpaper",
    price: "$1.00",
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=400&fit=crop",
    category: "Wallpapers",
    link: "https://ko-fi.com/s/6f6f6f6f6f",
    soldCount: 25,
    featured: true,
  },
  {
    id: "5",
    title: "Twitch Sub Badges Pack of 6",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
    category: "Badges",
    link: "https://ko-fi.com/s/5f5f5f5f5f",
    soldCount: 6,
  },
  {
    id: "6",
    title: "Cozy Swamp Scene Wallpaper",
    price: "$2.00",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
    category: "Wallpapers",
    link: "https://ko-fi.com/s/4f4f4f4f4f",
    soldCount: 18,
  },
  {
    id: "7",
    title: "Lily Pad Lofi Emotes",
    price: "$14.00",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=400&h=400&fit=crop",
    category: "Emotes",
    link: "https://ko-fi.com/s/3f3f3f3f3f",
    soldCount: 9,
  },
  {
    id: "8",
    title: "Fwog & Friends Character Art",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    category: "Art",
    link: "https://ko-fi.com/s/2f2f2f2f2f",
    soldCount: 4,
  },
];

export const categories = ["All", "Emotes", "Wallpapers", "Badges", "Art"] as const;
