import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import OverviewCard from './OverviewCard'

const Overview = () => {
  const moduleInfo = useSelector((state) => state.moduleInfo.data)

  const [statusCounter, setStatusCounter] = useState({
    Online: {
      count: 0,
      emoji: '👌',
    },
    Offline: {
      count: 0,
      emoji: '😰',
    },
    Total: {
      count: 0,
      emoji: '🙌',
    },
  })

  useEffect(() => {
    const counter = () => {
      let total = 0
      let online = 0
      moduleInfo.forEach((item) => {
        total += item.module.length
        item.module.forEach((subItem) => {
          if (subItem.latency !== -1) online += 1
        })
      })
      const offline = total - online
      return {
        total,
        online,
        offline,
      }
    }
    const counterData = counter()
    setStatusCounter((state) => ({
      ...state,
      Online: {
        ...state.Online,
        count: counterData.online,
      },
      Offline: {
        ...state.Offline,
        count: counterData.offline,
      },
      Total: {
        ...state.Total,
        count: counterData.total,
      },
    }))
  }, [moduleInfo])

  return (
    <div className="flex gap-x-4 md:gap-x-10">
      {statusCounter ? Object.keys(statusCounter).map((status) => (
        <OverviewCard
          key={status}
          status={statusCounter[status].emoji}
          number={statusCounter[status].count}
          description={status}
        />
      )) : null}
    </div>
  )
}

export default Overview
