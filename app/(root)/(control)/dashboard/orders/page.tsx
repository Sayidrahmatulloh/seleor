'use client'
import { FilterBar } from '@/components/lib/filter-bar'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { filterConfigs, products } from '@/const'
import { formatPrice } from '@/lib/functions'

const OrdersPage = () => {
  return (
    <>
      <FilterBar
        title='Orders'
        filters={[filterConfigs[0]]}
      />
      <Separator className='my-3' />
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
