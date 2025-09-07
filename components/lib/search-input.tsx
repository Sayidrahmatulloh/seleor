import { Input } from '@/components/ui/input'
import { ISearchInput } from '@/types'
import { SearchIcon } from 'lucide-react'

const SearchInput = ({ placeholder, onSearch }: ISearchInput) => {
  return (
    <div className='bg-secondary focus-within:ring-primary flex w-full items-center rounded-md border focus-within:ring-1'>
      <Input
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className='no-focus border-none text-sm'
      />
      <SearchIcon className='text-muted-foreground mr-2 cursor-pointer' />
    </div>
  )
}
export { SearchInput }
