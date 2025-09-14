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

const CustomerPage = () => {
  return (
    <>
      <FilterBar
        title='Customers'
        filters={[filterConfigs[0]]}
      />
      <Separator className='my-3' />
      <Table>
        <TableCaption>A list of your recent customers</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>N</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className='text-right'>Payments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>sayidrahmatulloh@gmail.com</TableCell>
            <TableCell>Sayidrahmatulloh</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Active</TableCell>
            <TableCell className='text-right'>$120.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
export default CustomerPage
