import { Title } from '@/components/lib/title'
import { WatchListCard } from '@/components/shared/watch-list-card'
import { Separator } from '@/components/ui/separator'
import { products } from '@/const'

const WatchListPage = () => {
  return (
    <>
      <Title label='Watch list' />
      <Separator />
      <div className='mt-3 grid grid-cols-1 gap-4 md:grid-cols-2'>
        {products.map((product) => (
          <WatchListCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </>
  )
}
export default WatchListPage
