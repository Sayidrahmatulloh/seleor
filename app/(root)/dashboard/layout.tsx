import { Sidebar } from '@/components/shared/sidebar'
import { ChildProps } from '@/types'

const Layout = ({ children }: ChildProps) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <Sidebar />
      </div>
      <div className='col-span-2'>{children}</div>
    </div>
  )
}
export default Layout
