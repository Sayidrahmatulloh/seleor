import { IStatItem } from '@/types'

const StatCard = (item: IStatItem) => {
  return (
    <div className='flex cursor-pointer flex-col items-center justify-center space-y-2 border-2 p-2 shadow-sm transition-all hover:animate-pulse'>
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
