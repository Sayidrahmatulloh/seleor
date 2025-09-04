import { QueryProps } from '@/types'
import queryString from 'query-string'

export const formatPrice = (price: number | null | undefined): string => {
  if (price == null || isNaN(price)) {
    return '0 UZS'
  }
  return new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS' }).format(price)
}

export function addUrlQuery({ params, key, value }: QueryProps) {
  const currentUrl = queryString.parse(params)
  currentUrl[key] = value!

  return queryString.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true },
  )
}

export function removeUrlQuery({ params, key }: QueryProps) {
  const currentUrl = queryString.parse(params)
  delete currentUrl[key]

  return queryString.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true },
  )
}
