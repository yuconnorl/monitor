import { Disclosure, Transition } from '@headlessui/react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useStatus from '../../hooks/useModuleStatus'
// components
import Totalstatuscount from '../Components/ToTalStatusCount'
import VersionCard from './VersionCard'
import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg'

const MachinesCard = ({ hostName, module }) => {
  const moduleStatus = useStatus()
  return (
    <div className={classnames('relative pl-4 pr-4 py-6 bg-white dark:bg-dark-medium rounded-xl')}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full">
              <div className="flex items-center justify-between">
                <div className="tracking-wide translate-x-2">{hostName}</div>
                <div className="flex items-center">
                  <Totalstatuscount statusData={moduleStatus ? moduleStatus[hostName] : [0, 0, 0, 0]} />
                  <Chevron className={`w-6 h-6 transition ${open ? null : 'transform rotate-180'}`} />
                </div>
              </div>
            </Disclosure.Button>
            {open && (
              <>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static className="pt-5 text-gray-500">
                    <div key={hostName} className="relative flex w-full lg:justify-center">
                      {module ? (
                        <div className="relative flex flex-col flex-wrap w-full lg:flex-row gap-y-5 lg:gap-3">
                          {module.map(({ name, version, latency }) => (
                            <VersionCard
                              key={name}
                              hostName={hostName}
                              version={version}
                              latency={latency}
                              moduleName={name}
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </>
        )}
      </Disclosure>
    </div>
  )
}

MachinesCard.propTypes = {
  hostName: PropTypes.string,
  module: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      version: PropTypes.string,
      latency: PropTypes.number,
    }),
  ),
}

export default MachinesCard
