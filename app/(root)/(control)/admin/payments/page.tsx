import { FilterBar } from '@/components/lib/filter-bar'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Separator } from '@radix-ui/react-separator'

const PaymentsPage = () => {
  return (
    <>
      <FilterBar title='Payments' />
      <Separator className='my-3' />
      <Table>
        <TableCaption>A list of your recent payments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead className='text-right'>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>iPhone 14 Pro</TableCell>
            <TableCell>Sayidrahmatulloh</TableCell>
            <TableCell>Shipped</TableCell>
            <TableCell>Apple</TableCell>
            <TableCell className='text-right'>$1,099</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={4}
              className='font-bold'>
              Total
            </TableCell>
            <TableCell className='text-right'>$1,099</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
export default PaymentsPage
