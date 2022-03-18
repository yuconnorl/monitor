import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { sumModuleStatus } from '../../helper/helperFunc'
import Totalstatuscount from '../Components/ToTalStatusCount'
import useModuleStatus from '../../hooks/useModuleStatus'

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const moduleStatus = useModuleStatus()

  // toggle dark theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkTheme((state) => !state)
  }

  useEffect(() => {
    // based on user profile, switch to dark theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches && !document.documentElement.classList.contains('dark')) {
      setIsDarkTheme(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    // while machines fail, update title
    if (!moduleStatus) return
    const failMachines = sumModuleStatus(moduleStatus)[3]
    document.title = failMachines !== 0 ? `(${failMachines}) Fails!` : 'Version monitor'
  }, [moduleStatus])

  return (
    <header className="dark:bg-[#242526] dark:bg-opacity-20 top-0 w-full py-6 fixed px-6 md:px-16 dark:text-Platinum bg-cultured bg-opacity-25 shadow-md z-20 backdrop-filter backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="text-sm tracking-widest sm:text-base md:text-xl font-RobotoLight">Version Monitor</div>
        <div className="flex">
          <div className="flex pr-4">
            <Totalstatuscount statusData={sumModuleStatus(moduleStatus)} />
          </div>
          <Switch checked={isDarkTheme} onChange={toggleTheme} className={`${isDarkTheme ? 'bg-[#4d4d4d]' : 'bg-gray-300'} group transition ease-in-out duration-200 relative inline-flex items-center h-6 rounded-full w-12`}>
            <span className="absolute text-base left-1">🌜</span>
            <div className="flex ">
              <span className={`${isDarkTheme ? 'translate-x-6 border-[#4d4d4d]' : 'translate-x-[0.125rem] border-gray-300'} border z-10 transition ease-in-out duration-200 inline-block w-[22px] h-[22px] bg-[#fafafa] rounded-full`} />
              <span className={`${isDarkTheme ? 'translate-x-6 ' : 'translate-x-[0.125rem] '} blur-sm group-hover:bg-[#1AC0C6] bg-transparent  absolute transition ease-in-out duration-200 inline-block w-[22px] h-[22px] rounded-full`} />
            </div>
            <span className="absolute text-base right-2">🌞</span>
          </Switch>
        </div>
      </div>
    </header>
  )
}

export default Header
