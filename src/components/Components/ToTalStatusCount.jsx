import PropTypes from 'prop-types'
import { STATE_COLORS_MAP } from '../../config'

const Totalstatuscount = ({ statusData }) => (
  <div className="flex pr-1 md:pr-3">
    {STATE_COLORS_MAP.map(([index, color]) => (
      <div key={color} className="flex items-center mx-2">
        <div className={`status-${color} w-4 h-4 mr-1 md:mr-3 rounded-full relative`} />
        <div className="ml-1">{statusData[index] || '0'}</div>
      </div>
    ))}
  </div>
)

Totalstatuscount.propTypes = { statusData: PropTypes.arrayOf(PropTypes.number) }

export default Totalstatuscount
