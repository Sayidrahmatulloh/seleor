'use client'
import { FilterSelect } from '@/components/lib/filter-select'
import { SearchInput } from '@/components/lib/search-input'
import { Title } from '@/components/lib/title'
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch'
import { useUrlFilter } from '@/hooks/useUrlFilter'
import { cn } from '@/lib/utils'
import { IFilterSelect } from '@/types'
import { FC } from 'react'

interface Props {
  title?: string
  showSearch?: boolean
  filters?: IFilterSelect[]
}

const FilterBar: FC<Props> = ({ title, showSearch = true, filters = [] }) => {
  const { updateQuery, getQueryValue } = useUrlFilter()
  const handleSearch = useDebouncedSearch('search', 300)

  return (
    <div className='mb-3 flex items-center justify-between'>
      {title && <Title label={title} />}
      <div
        className={cn(
          'grid gap-3',
          filters.length == 0 ? 'grid-cols-1' : filters.length == 2 ? 'grid-cols-3' : 'grid-cols-2',
        )}>
        {showSearch && (
          <SearchInput
            placeholder='Search'
            defaultValue={getQueryValue('search')}
            onSearch={(value: string) => handleSearch(value)}
          />
        )}
        {filters.map((filter, index) => (
          <FilterSelect
            key={index}
            params={filter.params}
            onValueChange={(key = filter.params, value) => updateQuery(key, value)}
            defaultValue={getQueryValue(filter.params)}
            placeholder={filter.placeholder}
            options={filter.options}
          />
        ))}
      </div>
    </div>
  )
}
export { FilterBar }
