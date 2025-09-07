'use client'
import { addUrlQuery, removeUrlQuery } from '@/lib/functions'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useUrlFilter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const updateQuery = useCallback(
    (key: string, value: string) => {
      if (value?.trim()) {
        const newUrl = addUrlQuery({
          key,
          params: searchParams.toString(),
          value: value.trim(),
        })
        router.push(newUrl)
      } else {
        const newUrl = removeUrlQuery({
          key,
          params: searchParams.toString(),
        })
        router.push(newUrl)
      }
    },
    [searchParams, router],
  )

  const getQueryValue = useCallback((key: string) => searchParams.get(key) || '', [searchParams])

  return { updateQuery, getQueryValue }
}
