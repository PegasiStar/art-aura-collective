export interface Artwork {
  id: string;
  title: string;
  price: string;
  image: string;
  category: "Emotes" | "Wallpapers" | "Badges" | "Art";
  link: string;
  soldCount?: number;
  featured?: boolean;
  description?: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Flippen' Frogs Emote Pack 1",
    price: "$11.86",
    image: "https://storage.ko-fi.com/cdn/useruploads/post/46f4b49e-6b70-4d8c-8859-ce007f41e4c7_frogs-pack1.png",
    category: "Emotes",
    link: "https://ko-fi.com/s/275091e0ca",
    featured: true,
    description: "Flippen' Frogs Emotes - Pack 1 🐸",
  },
  {
    id: "2",
    title: "Busy Beaver Emote Pack 1",
    price: "$11.86",
    image: "https://storage.ko-fi.com/cdn/useruploads/post/7d39cc98-46cf-4941-b8c3-7117f247efd5_busybeaversemotes01.png",
    category: "Emotes",
    link: "https://ko-fi.com/s/27189b0c6c",
    featured: true,
    description: "Busy Beaver Emotes - Pack 1 🦫",
  },
  {
    id: "3",
    title: "Baby Capybara Emote Pack 1",
    price: "$11.86",
    image: "https://storage.ko-fi.com/cdn/useruploads/post/16fe6669-8c03-48fc-adec-cf76bad91bae_babycapybaraemotes01.png",
    category: "Emotes",
    link: "https://ko-fi.com/s/34469cce1b",
    featured: true,
    description: "Capybara Emotes - Pack 1 🍊",
  },
  {
    id: "4",
    title: "Boba Toad - Phone Wallpaper",
    price: "$1.00",
    image: "https://storage.ko-fi.com/cdn/useruploads/post/5699ce56-123c-4fa8-b511-afa6a90fe879_bobatowallpaper5.png",
    category: "Wallpapers",
    link: "https://ko-fi.com/s/5a4e68846a",
    soldCount: 15,
    featured: true,
    description: "Adorable boba toad phone wallpaper 🧋",
  },
  {
    id: "5",
    title: "Twitch Badges (Pack of 6)",
    price: "$8.00",
    image: "https://storage.ko-fi.com/cdn/useruploads/post/90ea2bf0-2921-4b39-9464-8645da93865c_bgesexamples.png",
    category: "Badges",
    link: "https://ko-fi.com/c/7826b8bdd0",
    description: "Custom Twitch sub badges pack",
  },
  {
    id: "6",
    title: "Pride Frogs Emote Pack",
    price: "$11.86",
    image: "https://storage.ko-fi.com/cdn/useruploads/display/e2dca365-2c45-4042-ace0-8931acf14ee9_68dfb528-25e5-450c-9c0f-4497818d2a1d.png",
    category: "Emotes",
    link: "https://ko-fi.com/maybeechristine/shop",
    description: "Pride-themed frog emotes 🏳️‍🌈",
  },
];

export const categories = ["All", "Emotes", "Wallpapers", "Badges", "Art"] as const;
