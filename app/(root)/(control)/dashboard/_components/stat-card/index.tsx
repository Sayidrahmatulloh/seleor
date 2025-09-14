import { IStatItem } from '@/types'
import { FC } from 'react'

const StatCard: FC<IStatItem> = (item) => {
  return (
    <div className='flex cursor-pointer flex-col items-center justify-center space-y-2 overflow-hidden rounded-md border-2 p-2 shadow-sm transition-all hover:animate-pulse'>
      <item.icon
        size={50}
        className='text-primary'
      />
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>{item.value}</h1>
        <p>{item.label}</p>
      </div>
    </div>
  )
}
export { StatCard }
