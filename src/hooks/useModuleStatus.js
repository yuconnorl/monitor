import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { statusIdentifier, getStatus } from '../helper/helperFunc'

const useModuleStatus = () => {
  const moduleInfo = useSelector((state) => state.moduleInfo.data)

  return useMemo(() => moduleInfo.reduce((res, { name, module }) => {
    const state = module.map(({ latency }) => getStatus(latency))
    res[name] = statusIdentifier(state)
    return res
  }, {}), [moduleInfo])
}

export default useModuleStatus
