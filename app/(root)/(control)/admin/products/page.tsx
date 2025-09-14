import { FilterBar } from '@/components/lib/filter-bar'
import { Title } from '@/components/lib/title'
import { Separator } from '@/components/ui/separator'
import { filterConfigs, products } from '@/const'
import { AddProduct } from '../_components/add-product'
import { ProductCard } from '../_components/product-card'

const ProductsPage = () => {
  return (
    <>
      <div className='flex w-full items-center justify-between'>
        <Title label='Products' />
        <AddProduct />
      </div>
      <Separator className='my-3' />
      <FilterBar filters={filterConfigs} />
      <div className='mt-3 grid grid-cols-1 gap-4 md:grid-cols-2'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
export default ProductsPage
