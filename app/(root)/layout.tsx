import { Header } from '@/components/shared/header'
import { ChildProps } from '@/types'

const Layout = ({ children }: ChildProps) => {
  return (<div> <Header /> <main className='container mt-24 max-w-6xl'>{children}</main> </div>
  )
}
export default Layout
