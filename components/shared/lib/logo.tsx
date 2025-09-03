import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center space-x-2'>
      <ShoppingCartIcon className='size-6 text-blue-500' />
      <span className='text-xl font-bold text-blue-500'>Seleor</span>
    </Link>
  )
}
export { Logo }
