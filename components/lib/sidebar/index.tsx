'use client'
import { Title } from '@/components/lib/title'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ISidebar } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ sidebarTitle, sidebarMenuItems }: ISidebar) => {
  const pathname = usePathname()
  return (
    <div className='border-r p-4'>
      <Title label={sidebarTitle} />
      <Separator />
      <div className='mt-2 flex flex-col'>
        {sidebarMenuItems.map((menuItem) => (
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
