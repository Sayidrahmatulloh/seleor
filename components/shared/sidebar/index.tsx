'use client'
import { Title } from '@/components/lib/title'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { menuItems } from '@/const'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='border-r p-4'>
      <Title label='Dashbard' />
      <Separator />
      <div className='mt-2 flex flex-col'>
        {menuItems.map((menuItem) => (
          <Button
            key={menuItem.route}
            asChild
            className={cn('flex justify-start', pathname == menuItem.route && 'font-bold')}
            variant={pathname == menuItem.route ? 'default' : 'ghost'}>
            <Link href={menuItem.route}>
              <menuItem.icon />
              <span>{menuItem.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
export { Sidebar }
