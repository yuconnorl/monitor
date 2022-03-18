import { STATE_TYPE } from '../config'

// statusSum => 狀態總量
// moduleStatus = 個模組狀態

const getDefaultStatusSum = () => Object.keys(STATE_TYPE).fill(0)

export const statusIdentifier = (moduleStatus = []) => {
  const result = getDefaultStatusSum()
  if (!Array.isArray(moduleStatus)) return result

  moduleStatus.forEach((i) => {
    result[i] += 1
  })

  return result
}

export const getStatus = (ms) => {
  const { DEAD, LOW, MID, HIGH } = STATE_TYPE
  if (ms === -1) return DEAD
  if (ms === 0 || ms <= 10) return LOW
  if (ms <= 100) return MID
  return HIGH
}

export const sumModuleStatus = (data = {}) => {
  const result = getDefaultStatusSum()

  const values = Object.values(data)
  values.forEach((statusSum) => {
    statusSum.forEach((value, i) => {
      result[i] += value
    })
  })

  return result
}
