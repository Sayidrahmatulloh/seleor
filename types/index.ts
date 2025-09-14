import { LucideIcon } from 'lucide-react'

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
export interface IMenuItem {
  label: string
  route: string
  icon: LucideIcon
}
export interface IStatItem {
  icon: LucideIcon
  value: number
  label: string
}

export interface IProfileInfo {
  id: number
  name: 'email' | 'fullName'
  type: string
  label: string
  value: string
}
export interface ISearchInput {
  placeholder: string
  defaultValue?: string
  onSearch: (value: string) => void
}

export interface IFilterOption {
  label: string
  value: string
}

export interface IFilterSelect {
  onValueChange?: (label: string, value: string) => void
  defaultValue?: string
  options: IFilterOption[]
  placeholder: string
  params: string
}

export interface ISidebar {
  sidebarTitle: string
  sidebarMenuItems: IMenuItem[]
}
