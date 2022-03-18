import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ReactComponent as ConnectionFail } from '../../assets/icons/connection-fail.svg'

const ConnectionFailed = ({ isOffline }) => {
  const navigate = useNavigate()

  const refresh = () => {
    navigate(0)
  }

  return (
    <>
      <AnimatePresence>
        {isOffline && (
          <motion.div
            key="offline"
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ y: 100 }}
            className="fixed flex items-center h-10 px-6 py-10 rounded-xl dark:bg-cultured bg-dark-light bottom-5 left-5"
          >
            <div className="mr-4">
              <ConnectionFail />
            </div>
            <div className="flex mr-4">
              <div className="mr-3 text-cultured dark:text-current">
                <p>WebSocket connection failed.</p>
              </div>
              <button type="button" onClick={refresh} className="text-blue-500 transition-opacity cursor-pointer hover:opacity-70">
                Refresh
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
ConnectionFailed.propTypes = { isOffline: PropTypes.bool }

export default ConnectionFailed
