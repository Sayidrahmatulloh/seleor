'use client'
import { debounce } from 'lodash'
import { useCallback } from 'react'
import { useUrlFilter } from './useUrlFilter'

export const useDebouncedSearch = (queryKey: string, delay: number) => {
  const { updateQuery } = useUrlFilter()
  return useCallback(
    (value: string) => {
      const debouncedFn = debounce(() => {
        updateQuery(queryKey, value)
      }, delay)
      debouncedFn()
    },
    [delay, queryKey, updateQuery],
  )
}
