'use client'
import { FilterSelect } from '@/components/lib/filter-select'
import { SearchInput } from '@/components/lib/search-input'
import { Title } from '@/components/lib/title'
import { categories } from '@/const'
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch'
import { useUrlFilter } from '@/hooks/useUrlFilter'

const ProductFilterBar = () => {
  const { updateQuery, getQueryValue } = useUrlFilter()
  const handleSearch = useDebouncedSearch('search', 300)

  return (
    <div className='flex items-center justify-between'>
      <Title label='Products' />
      <div className='grid grid-cols-3 gap-1'>
        <SearchInput
          placeholder='Search'
          defaultValue={getQueryValue('search')}
          onSearch={(value: string) => handleSearch(value)}
        />
        {/* Select filter*/}
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
        {/* Select category */}
        <FilterSelect
          params='category'
          onValueChange={(key = 'category', value) => updateQuery(key, value)}
          defaultValue={getQueryValue('category')}
          placeholder='Select category'
          options={categories}
        />
      </div>
    </div>
  )
}

export { ProductFilterBar }
