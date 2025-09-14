import { FilterBar } from '@/components/lib/filter-bar'
import { Pagination } from '@/components/lib/pagination'
import { Separator } from '@/components/ui/separator'
import { filterConfigs } from '@/const'
import { ProductGrid } from './product-grid'

const Products = () => {
  return (
    <div className='mb-10'>
      <FilterBar
        title='Products'
        filters={filterConfigs}
      />
      <Separator className='my-3' />
      <ProductGrid />
      <Pagination />
    </div>
  )
}
export { Products }
