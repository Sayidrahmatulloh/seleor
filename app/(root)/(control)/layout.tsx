'use client'
import { Sidebar } from '@/components/lib/sidebar'
import { adminSideberMenuItems, dashboardSidebarMenuItems } from '@/const'
import { ChildProps } from '@/types'
import { usePathname } from 'next/navigation'

const Layout = ({ children }: ChildProps) => {
  const pathname = usePathname()

  const getSidebarConfig = () => {
    if (pathname.includes('/admin')) {
      return {
        title: 'Admin Dashboard',
        menuItems: adminSideberMenuItems,
      }
    }

    return {
      title: 'Dashboard',
      menuItems: dashboardSidebarMenuItems,
    }
  }

  const config = getSidebarConfig()

  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <Sidebar
          sidebarTitle={config.title}
          sidebarMenuItems={config.menuItems}
        />
      </div>
      <div className='col-span-2 pb-10'>{children}</div>
    </div>
  )
}
export default Layout
