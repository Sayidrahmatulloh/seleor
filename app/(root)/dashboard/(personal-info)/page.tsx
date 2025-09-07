import { Title } from '@/components/lib/title'
import { EditInfo } from '@/components/shared/edit-info'
import { StatCard } from '@/components/shared/stat-card'
import { Separator } from '@/components/ui/separator'
import { statCards } from '@/const'

const DashboardPage = () => {
  return (
    <>
      <Title label='Personal information' />
      <Separator className='my-3' />
      <EditInfo />
      <div className='grid grid-cols-3 gap-4'>
        {statCards.map((item) => (
          <StatCard
            key={item.label}
            {...item}
          />
        ))}
      </div>
    </>
  )
}
export default DashboardPage
