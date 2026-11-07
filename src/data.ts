// Demo catalogue for the prototype. Everything here is local mock data: no
// network calls, no persistence. Swap for real API data later.

export type Product = {
  id: string
  name: string
  price: number
  compareAt?: number
  image: string
  category: string
  creator: string
  detail: string
  badge?: string
  contain?: boolean
}

export type Creator = {
  handle: string
  name: string
  category: string
  followers: string
  products: number
  avatar: string
  cover: string
  coverClass?: string
  verified?: boolean
  bio: string
  channels: string[]
}

export const products: Product[] = [
  {
    id: 'hoodie',
    name: 'Oversized Hoodie',
    price: 68,
    compareAt: 85,
    image: '/media/hoodie.jpg',
    category: 'Streetwear',
    creator: 'Reva Store',
    detail: 'Washed black · Heavyweight cotton',
    badge: 'Bestseller',
  },
  {
    id: 'sneaker',
    name: 'Everyday Low Sneaker',
    price: 120,
    image: '/media/shoe-cut.webp',
    category: 'Footwear',
    creator: 'Reva Store',
    detail: 'Cream · Unisex sizes 38–46',
    badge: 'New drop',
    contain: true,
  },
  {
    id: 'tote',
    name: 'Heavy Canvas Tote',
    price: 28,
    image: '/media/tote.jpg',
    category: 'Accessories',
    creator: 'Reva Store',
    detail: 'Natural canvas · Screen printed',
  },
  {
    id: 'mug',
    name: 'Studio Ceramic Mug',
    price: 22,
    image: '/media/mug.jpg',
    category: 'Home',
    creator: 'Reva Store',
    detail: 'Off-white · 350ml',
    badge: 'Restocked',
  },
]

export const categories = ['All', 'Streetwear', 'Footwear', 'Accessories', 'Home'] as const

export const creators: Creator[] = [
  {
    handle: 'revastore',
    name: 'Reva Store',
    category: 'Streetwear',
    followers: '120K',
    products: 12,
    avatar: '/media/avatar-12.jpg',
    cover: '/media/hero-cut.webp',
    coverClass: 'bg-[linear-gradient(155deg,#f2ecff,#e3d6fa)] object-contain object-bottom',
    verified: true,
    bio: 'Everyday pieces for people who make things. Ships from Nairobi in 48 hours.',
    channels: ['TikTok', 'Instagram', 'WhatsApp'],
  },
  {
    handle: 'amara',
    name: 'Amara Reed',
    category: 'Fashion',
    followers: '86K',
    products: 18,
    avatar: '/media/avatar-45.jpg',
    cover: '/media/tote.jpg',
    verified: true,
    bio: 'Slow fashion, small batches. Everything cut and sewn in Lagos.',
    channels: ['TikTok', 'WhatsApp'],
  },
  {
    handle: 'linamoss',
    name: 'Lina Moss',
    category: 'Home',
    followers: '54K',
    products: 9,
    avatar: '/media/avatar-32.jpg',
    cover: '/media/mug.jpg',
    bio: 'Wheel-thrown ceramics and quiet objects for loud kitchens.',
    channels: ['Instagram', 'TikTok'],
  },
  {
    handle: 'deonk',
    name: 'Deon K.',
    category: 'Streetwear',
    followers: '74K',
    products: 22,
    avatar: '/media/avatar-8.jpg',
    cover: '/media/hoodie.jpg',
    verified: true,
    bio: 'Limited drops every other Friday. No restocks, no repeats.',
    channels: ['TikTok', 'Instagram', 'WhatsApp'],
  },
  {
    handle: 'sarab',
    name: 'Sara B.',
    category: 'Accessories',
    followers: '210K',
    products: 31,
    avatar: '/media/avatar-65.jpg',
    cover: '/media/tote.jpg',
    verified: true,
    bio: 'Bags, belts and small leather goods. Made to be repaired, not replaced.',
    channels: ['TikTok', 'WhatsApp'],
  },
  {
    handle: 'kito',
    name: 'Kito Studio',
    category: 'Footwear',
    followers: '32K',
    products: 6,
    avatar: '/media/avatar-20.jpg',
    cover: '/media/shoe-cut.webp',
    coverClass: 'bg-soft object-contain object-center',
    bio: 'Independent sneaker label. Designed in Accra, made in small runs.',
    channels: ['Instagram'],
  },
]

export const demoOrder = {
  id: '#REVA1001',
  reference: '#REVA1001',
  placed: '2 Nov 2026',
  eta: 'Thu, 6 Nov',
  address: '18 Riverside Drive, Nairobi',
  payment: 'M-PESA ···· 4021',
  courier: 'REVA Courier',
  items: [
    { product: products[0], qty: 1 },
    { product: products[2], qty: 1 },
  ],
  steps: [
    { title: 'Order confirmed', detail: '2 Nov, 09:14 · payment received' },
    { title: 'Packed by Reva Store', detail: '3 Nov, 16:40 · ready for pickup' },
    { title: 'In transit', detail: '4 Nov, 08:05 · with REVA Courier' },
    { title: 'Out for delivery', detail: 'Expected Thu, 6 Nov' },
  ],
  activeStep: 2,
}
