import React from 'react'

import Pool, { IPoolProps } from './pool/pool'

import './pools.scss'

interface IPools {
  pools: IPoolProps[]
}

const Pools: React.FC<IPools> = ({ pools }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-lg-2 my-4">
        {pools.map((pool) => {
          const {
            id,
            title,
            imageAddress,
            description,
            temperature,
            occupancy,
            fromDate,
          } = pool
          return (
            <Pool
              key={id}
              id={id}
              title={title}
              imageAddress={imageAddress}
              description={description}
              temperature={temperature}
              occupancy={occupancy}
              fromDate={fromDate}
            />
          )
        })}
      </div>
    </>
  )
}

export default Pools
