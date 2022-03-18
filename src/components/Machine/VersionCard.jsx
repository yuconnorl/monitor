import { useMemo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { getStatus } from '../../helper/helperFunc'
import { STATE_COLORS_MAP } from '../../config'

const VersionCard = ({ moduleName, version, latency }) => {
  const latencyColor = useMemo(() => {
    const status = STATE_COLORS_MAP.find(([state]) => getStatus(latency) === state)
    if (!status) return 'status-black'
    return `status-${status[1]}`
  }, [latency])

  return (
    <div className={`${!(latency === -1) ? 'dark:bg-dark-light bg-[#F6F6F6]' : 'bg-[#979797] dark:bg-[#3a393b]'} dark:text-Platinum relative p-4 rounded-xl w-full xl:w-[49%] transition-all hover:opacity-70`}>
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-center w-10 md:w-auto md:flex-row translate-y-0.5 md:translate-y-0">
          <div className="flex items-center mb-1 md:mr-3 md:mb-0">
            <div className="relative items-center justify-center w-4 h-4">
              <div className={classNames(latencyColor, 'w-4 h-4 rounded-full animate-ping absolute')} />
              <div className={classNames(latencyColor, 'w-4 h-4 mr-3 rounded-full absolute')} />
            </div>
          </div>
          <div className={`${latency} !bg-transparent relative`}>
            <div>{!(latency === -1) ? Math.floor(latency) : 'Failed'}</div>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="font-RobotoMedium">{moduleName}</div>
          <div className="text-sm md:ml-auto">
            <div>{version}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

VersionCard.propTypes = {
  moduleName: PropTypes.string,
  version: PropTypes.string,
  latency: PropTypes.number,
}

export default VersionCard
