import { useState, useEffect } from 'react'
import Avatar from 'boring-avatars'
import { useDispatch } from 'react-redux'
import { initialModuleRoutes } from './store/reducers/moduleInfoSlice'
// components
import Header from './components/Header'
import Overview from './components/Overview'
import Machine from './components/Machine'
import ConnectionFailed from './components/Components/ConnectionFailed'
import Footer from './components/Footer'
import Section from './components/Section'

const getWsUrl = () => {
  const host = process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:1324'
  const protocol = 'ws://'
  const path = '/monitor/ws'
  return protocol + host + path
}

const App = () => {
  const dispatch = useDispatch()
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    // websocket connection
    try {
      const ws = new WebSocket(getWsUrl())

      ws.onmessage = (message) => {
        setIsOffline(false)
        const data = JSON.parse(message.data)
        dispatch(initialModuleRoutes(data))
      }

      ws.onclose = () => {
        setIsOffline(true)
      }

      ws.onerror = () => {
        setIsOffline(true)
      }
    } catch (err) {
      setIsOffline(true)
    }
  }, [dispatch])

  return (
    <>
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-20 pb-6 mt-32 font-RobotoRegular text-[#444444] dark:text-Platinum">
        <div className="relative flex items-center pb-20 pl-6">
          <Avatar
            id="ava"
            size={80}
            name={(Math.random() + 1).toString(36).substring(7)}
            variant="beam"
            colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
          />
          <div className="absolute bottom-0 left-0 text-2xl " />
          <div className="ml-4">
            <h1 className="text-xl font-RobotoMedium">
              <span>Welcome to Version Monitor</span>
              <span className="inline-block animate-wiggle origin-handWaving">👋</span>
            </h1>
            <h2 className="text-base font-RobotoLight">Check out the status of modules</h2>
          </div>
        </div>
        <Section title="Overview">
          <Overview />
        </Section>
        <Section title="Machines">
          <Machine />
        </Section>
        <Footer />
      </main>
      <ConnectionFailed isOffline={isOffline} />
      <div className="pointer-events-none whitespace-nowrap z-[-1] fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 scale-y-150  text-[#9999999f] text-9xl opacity-5">
        {process.env.REACT_APP_TAG_VERSION || 'DEV MODE'}
      </div>
    </>
  )
}

export default App
