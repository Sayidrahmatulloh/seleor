import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { IFilterSelect } from '@/types'

const FilterSelect = ({
  onValueChange,
  defaultValue,
  placeholder,
  options,
  params,
}: IFilterSelect) => {
  return (
    <Select
      onValueChange={(value) => onValueChange(params, value)}
      value={defaultValue}>
      <SelectTrigger className='bg-secondary w-full text-xs'>
        <SelectValue
          placeholder={placeholder}
          className='text-muted-foreground'
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
export { FilterSelect }
