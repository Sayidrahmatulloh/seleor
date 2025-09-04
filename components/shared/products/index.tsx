import { Pagination } from '@/components/shared/pagination'
import { Separator } from '@/components/ui/separator'
import { ProductFilterBar } from './product-filter-bar'
import { ProductGrid } from './product-grid'

const Products = () => {
  return (
    <div className='mb-10'>
      <ProductFilterBar />
      <Separator className='my-3' />
      <ProductGrid />
      <Pagination />
    </div>
  )
}
export { Products }
