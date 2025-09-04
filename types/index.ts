export interface ChildProps {
  children: React.ReactNode
}

export interface QueryProps {
  params: string
  key: string
  value?: string | null
}

export interface IProduct {
  id: number
  title: string
  description: string
  image: string
  price: number
  category: string
}
