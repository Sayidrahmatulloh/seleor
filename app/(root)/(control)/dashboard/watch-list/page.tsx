import { FilterBar } from '@/components/lib/filter-bar'
import { Separator } from '@/components/ui/separator'
import { filterConfigs, products } from '@/const'
import { WatchListCard } from '../_components/watch-list-card'

const WatchListPage = () => {
  return (
    <>
      <FilterBar
        title='Watch List'
        filters={[filterConfigs[0]]}
      />
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
