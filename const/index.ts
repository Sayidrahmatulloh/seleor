import { IFilterOption, IMenuItem, IProduct, IProfileInfo, IStatItem } from '@/types'
import {
  BanknoteIcon,
  BarcodeIcon,
  HeartIcon,
  Settings2Icon,
  ShuffleIcon,
  UserIcon,
} from 'lucide-react'

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Blue T-Shirt',
    description: 'Comfortable cotton t-shirt in blue color, perfect for everyday wear.',
    image: '/products/1.webp',
    price: 25,
    category: 'Clothing',
  },
  {
    id: 2,
    title: 'Running Shoes',
    description: 'Lightweight blue running shoes designed for performance and style.',
    image: '/products/2.webp',
    price: 80,
    category: 'Footwear',
  },
  {
    id: 3,
    title: 'E-book',
    description: 'Digital book about open commerce and business insights.',
    image: '/products/3.webp',
    price: 15,
    category: 'Books',
  },
  {
    id: 4,
    title: 'Blue Hoodie',
    description: 'Cozy hoodie with a modern fit, ideal for casual wear.',
    image: '/products/4.webp',
    price: 45,
    category: 'Clothing',
  },
  {
    id: 5,
    title: 'Casual Sneakers',
    description: 'Classic blue sneakers with a clean design and durable sole.',
    image: '/products/5.webp',
    price: 60,
    category: 'Footwear',
  },
  {
    id: 6,
    title: 'Light Blue T-Shirt',
    description: 'Soft light blue t-shirt made from organic cotton.',
    image: '/products/6.webp',
    price: 22,
    category: 'Clothing',
  },
  {
    id: 7,
    title: 'Patterned T-Shirt',
    description: 'White t-shirt with a unique printed blue pattern.',
    image: '/products/7.webp',
    price: 28,
    category: 'Clothing',
  },
  {
    id: 8,
    title: 'Polo Shirt',
    description: 'Dark blue polo shirt with collar, perfect for semi-casual style.',
    image: '/products/8.webp',
    price: 35,
    category: 'Clothing',
  },
  {
    id: 9,
    title: 'Navy Blue T-Shirt',
    description: 'Stylish navy blue t-shirt with a minimalistic design.',
    image: '/products/9.webp',
    price: 27,
    category: 'Clothing',
  },
  {
    id: 10,
    title: 'Sport Sneakers',
    description: 'Durable sport sneakers with Saleor branding.',
    image: '/products/10.webp',
    price: 75,
    category: 'Footwear',
  },
  {
    id: 11,
    title: 'Blue Sunglasses',
    description: 'Trendy sunglasses with blue lenses for a stylish look.',
    image: '/products/11.webp',
    price: 40,
    category: 'Accessories',
  },
]

export const sortOptions: IFilterOption[] = [
  { label: 'Name A-Z', value: 'name_asc' },
  { label: 'Name Z-A', value: 'name_desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
]

export const categoryOptions: IFilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Shoes', value: 'shoes' },
  { label: 'T-Shirt', value: 'tshirt' },
  { label: 'Clothes', value: 'clothes' },
  { label: 'Books', value: 'books' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Universal', value: 'univercel' },
]

export const dashboardSidebarMenuItems: IMenuItem[] = [
  { label: 'Personal information', route: '/dashboard', icon: UserIcon },
  { label: 'Orders', route: '/dashboard/orders', icon: ShuffleIcon },
  { label: 'Payments', route: '/dashboard/payments', icon: BanknoteIcon },
  { label: 'Watch list', route: '/dashboard/watch-list', icon: HeartIcon },
  { label: 'Settings', route: '/dashboard/settings', icon: Settings2Icon },
]

export const adminSideberMenuItems: IMenuItem[] = [
  { label: 'Customers', route: '/admin', icon: UserIcon },
  { label: 'Products', route: '/admin/products', icon: BarcodeIcon },
  { label: 'Orders', route: '/admin/orders', icon: ShuffleIcon },
  { label: 'Payments', route: '/admin/payments', icon: BanknoteIcon },
]

export const statCards: IStatItem[] = [
  { icon: ShuffleIcon, value: 3, label: 'Orders' },
  { icon: BanknoteIcon, value: 4, label: 'Payments' },
  { icon: HeartIcon, value: 8, label: 'Watch list' },
]

export const profileInfoList: IProfileInfo[] = [
  {
    id: 1,
    type: 'text',
    name: 'fullName',
    label: 'Full Name',
    value: 'Sayidrahmatulloh Hikmatullayev',
  },
  { id: 2, type: 'email', name: 'email', label: 'Email', value: 'sayidrahmatulloh@gmail.com' },
]

export const filterConfigs = [
  {
    params: 'sort',
    placeholder: 'Sort by',
    options: sortOptions,
  },
  {
    params: 'category',
    placeholder: 'Select category',
    options: categoryOptions,
  },
]
