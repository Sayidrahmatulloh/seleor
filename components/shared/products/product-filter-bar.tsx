'use client'
import { Title } from '@/components/lib/title'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/const'
import { addUrlQuery, removeUrlQuery } from '@/lib/functions'
import { debounce } from 'lodash'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

const ProductFilterBar = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const updateQuery = useCallback(
    (key: string, value: string) => {
      if (value) {
        const newUrl = addUrlQuery({ key: key, params: searchParams.toString(), value })
        router.push(newUrl)
      } else {
        const newUrl = removeUrlQuery({ key: key, params: searchParams.toString() })
        router.push(newUrl)
      }
    },
    [searchParams, router],
  )

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        updateQuery('search', value)
      }, 300),
    [updateQuery],
  )

  return (
    <div className='flex items-center justify-between'>
      <Title label='Products' />
      <div className='grid grid-cols-3 gap-1 max-md:w-full'>
        {/* Search */}
        <div className='bg-secondary focus-within:ring-primary flex w-full items-center rounded-md border focus-within:ring-1'>
          <Input
            placeholder='Search'
            onChange={(e) => debouncedSearch(e.target.value)}
            className='no-focus border-none text-sm'
          />
          <SearchIcon className='text-muted-foreground mr-2 cursor-pointer' />
        </div>
        {/* Select filter*/}
        <Select onValueChange={(value) => updateQuery('filter', value)}>
          <SelectTrigger className='bg-secondary w-full text-xs'>
            <SelectValue
              placeholder='Select filter'
              className='text-muted-foreground'
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='newest'>Newest</SelectItem>
            <SelectItem value='oldest'>Oldest</SelectItem>
          </SelectContent>
        </Select>
        {/* Select category */}
        <Select onValueChange={(value) => updateQuery('category', value)}>
          <SelectTrigger className='bg-secondary w-full text-xs'>
            <SelectValue
              placeholder='Select category'
              className='text-muted-foreground'
            />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem
                key={category}
                value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export { ProductFilterBar }
