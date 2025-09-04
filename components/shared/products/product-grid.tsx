import { products } from '@/const'
import { ProductCard } from './product-card'

const ProductGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductCard
          {...product}
          key={product.id}
        />
      ))}
    </div>
  )
}
export { ProductGrid }
