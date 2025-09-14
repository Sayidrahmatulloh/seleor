import { ChildProps } from '@/types'
import { FC } from 'react'

const Layout: FC<ChildProps> = ({ children }) => {
  return <div className='mt-44 flex justify-center'>{children}</div>
}
export default Layout
