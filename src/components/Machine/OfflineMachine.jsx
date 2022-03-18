import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MachinesCard from './MachinesCard'
import LoadingCard from '../Components/LoadingCard'
import FullyFunctionalCard from './FullyFunctionalCard'

const OfflineMachine = () => {
  const moduleInfo = useSelector((state) => state.moduleInfo.data)
  const [offlineModule, setOfflineModule] = useState([])
  const [filterOut, setFilterOut] = useState(false)
  useEffect(() => {
    if (moduleInfo.length !== 0) {
      const offline = moduleInfo
        .map((item) => ({
          host: item.name,
          offline: item.module.filter((subItem) => subItem.latency === -1),
        }))
        // filter out offline modules
        .filter((item) => item.offline.length !== 0) // filter out empty array
      setOfflineModule(offline)
      setFilterOut(true)
    }
  }, [moduleInfo])

  return (
    <article>
      {offlineModule.length !== 0 ? (
        <div className="flex flex-col gap-y-6">
          {offlineModule.map(({ host, offline }) => (
            <MachinesCard key={host} hostName={host} module={offline} />
          ))}
        </div>
      ) : (
        // kinda ugly...
        <div>{filterOut && offlineModule.length === 0 ? <FullyFunctionalCard /> : <LoadingCard />}</div>
      )}
    </article>
  )
}

export default OfflineMachine
