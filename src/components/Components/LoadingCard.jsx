import { nanoid } from '@reduxjs/toolkit'
import { memo } from 'react'

const LoadingCard = memo(() => {
  const loadingMachine = new Array(2).fill(0).map(() => nanoid())
  const loadingModule = new Array(4).fill(0).map(() => nanoid())

  return (
    <div className="flex flex-col gap-y-4">
      {loadingMachine.map((id) => (
        <div key={id} className="relative py-6 pl-4 pr-4 bg-white dark:bg-dark-medium rounded-xl">
          <div className="animate-pulse dark:bg-dark-light bg-[#F6F6F6] pl-2 mb-4 w-20 p-4 rounded-xl" />
          <div className="relative flex flex-col flex-wrap w-full lg:flex-row gap-y-5 lg:gap-3">
            {loadingModule.map((mId) => (
              <div key={mId} className="animate-pulse dark:bg-dark-light bg-[#F6F6F6] relative p-6 rounded-xl w-full xl:w-[49%]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
})

export default LoadingCard
