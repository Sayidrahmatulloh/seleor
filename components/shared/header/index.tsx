import { Logo } from '@/components/shared/lib/logo'
import { Button } from '@/components/ui/button'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-secondary fixed inset-0 z-50 h-20 border-b'>
      <div className='container flex h-full max-w-6xl items-center justify-between'>
        <Logo />
        <div className='flex items-center'>
          <Button
            asChild
            size='icon'>
            <Link href='/sign-in'>
              <UserIcon className='size-5' />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
export { Header }
