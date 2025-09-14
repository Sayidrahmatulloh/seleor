import { FilterBar } from '@/components/lib/filter-bar'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { filterConfigs } from '@/const'
import { OrderActions } from '../_components/order-actions'

const OrdersPage = () => {
  return (
    <>
      <FilterBar
        title='Orders'
        filters={[filterConfigs[1]]}
      />
      <Separator className='my-3' />
      <Table>
        <TableCaption>A list of your recent customers</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Premium Plan</TableCell>
            <TableCell>Sayidrahmatulloh</TableCell>
            <TableCell>$49.00</TableCell>
            <TableCell>2025-09-10</TableCell>
            <TableCell className='text-right'>
              <OrderActions />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
export default OrdersPage
