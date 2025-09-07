import { profileInfoList } from '@/const'
import { ProfileInfoItem } from './profile-info-item'

const ProfileInfoList = () => {
  return (
    <div className='bg-secondary my-3 px-4'>
      {profileInfoList.map((profileInfo) => (
        <ProfileInfoItem
          key={profileInfo.id}
          {...profileInfo}
        />
      ))}
    </div>
  )
}
export { ProfileInfoList }
