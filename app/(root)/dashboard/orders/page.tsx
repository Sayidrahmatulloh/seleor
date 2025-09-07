'use client'
import { FilterSelect } from '@/components/lib/filter-select'
import { SearchInput } from '@/components/lib/search-input'
import { Title } from '@/components/lib/title'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { products } from '@/const'
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch'
import { useUrlFilter } from '@/hooks/useUrlFilter'
import { formatPrice } from '@/lib/functions'

const OrdersPage = () => {
  const { updateQuery, getQueryValue } = useUrlFilter()
  const handleSearch = useDebouncedSearch('search', 300)
  return (
    <>
      <div className='flex w-full items-center justify-between'>
        <Title label='Orders' />
        <div className='flex items-center gap-2'>
          <SearchInput
            placeholder='Search'
            defaultValue={getQueryValue('search')}
            onSearch={(value: string) => handleSearch(value)}
          />
          <FilterSelect
            params='filter'
            onValueChange={(key = 'filter', value) => updateQuery(key, value)}
            defaultValue={getQueryValue('filter')}
            placeholder='Select filter'
            options={[
              { label: 'Default', value: 'default' },
              { label: 'Newest', value: 'newest' },
              { label: 'Oldest', value: 'oldest' },
            ]}
          />
        </div>
      </div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className='text-right'>Update time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>Click</TableCell>
              <TableCell>10 November 2024</TableCell>
              <TableCell className='text-right'>{formatPrice(product.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default OrdersPage
