import classNames from 'classnames'
import { NavLink, Route, Routes } from 'react-router-dom'
import MachineBody from './MachineBody'
import OfflineMachine from './OfflineMachine'
import { ReactComponent as StatusOnline } from '../../assets/icons/status-online.svg'
import { ReactComponent as StatusOffline } from '../../assets/icons/status-offline.svg'

const navLinkClasses = {
  base: 'w-28 h-12 rounded-t-3xl rounded-b-none flex items-center justify-center',
  active: 'bg-[#E9E9E9] dark:bg-dark-light z-10',
  inactive: 'bg-[#C4C4C4] dark:bg-dark-medium opacity-70',
}

const Machine = () => (
  <>
    <nav className="flex pl-5 ">
      <NavLink to="/" className={({ isActive }) => classNames(navLinkClasses.base, isActive ? navLinkClasses.active : navLinkClasses.inactive)}>
        <StatusOnline />
        <span className="ml-1">All</span>
      </NavLink>
      <NavLink to="offline" className={({ isActive }) => classNames(navLinkClasses.base, 'transition-all -translate-x-1', isActive ? navLinkClasses.active : navLinkClasses.inactive)}>
        <StatusOffline />
        <span className="ml-1">Offline</span>
      </NavLink>
    </nav>
    <div className="p-3 md:p-6 bg-[#E9E9E9] dark:bg-dark-light rounded-2xl">
      <Routes>
        <Route path="/" exact element={<MachineBody />} />
        <Route path="offline" element={<OfflineMachine />} />
      </Routes>
    </div>
  </>
)

export default Machine
