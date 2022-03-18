import { useSelector } from 'react-redux'

import MachinesCard from './MachinesCard'
import LoadingCard from '../Components/LoadingCard'

const Machinebody = () => {
  const moduleInfo = useSelector((state) => state.moduleInfo.data)

  return (
    <article>
      {moduleInfo.length !== 0 ? (
        <div className="flex flex-col gap-y-6">
          {moduleInfo.map(({ name, module }) => (
            <MachinesCard key={name} hostName={name} module={module} />
          ))}
        </div>
      ) : (
        <LoadingCard />
      )}
    </article>
  )
}

export default Machinebody
