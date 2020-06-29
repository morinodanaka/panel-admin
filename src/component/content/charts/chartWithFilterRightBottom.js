import React, { useState, useEffect } from 'react'
import { AreaChart, Area, Tooltip } from 'recharts';
const data = [
  {
    name: 'Page A', uv: 400, pv: 240, amt: 400,
  },
  {
    name: 'Page B', uv: 300, pv: 138, amt: 210,
  },
  {
    name: 'Page C', uv: 200, pv: 980, amt: 290,
  },
  {
    name: 'Page D', uv: 280, pv: 898, amt: 200,
  },
  {
    name: 'Page E', uv: 890, pv: 480, amt: 281,
  },
  {
    name: 'Page F', uv: 390, pv: 380, amt: 500,
  },
  {
    name: 'Page G', uv: 3490, pv: 700, amt: 2100,
  },
];

function ChartWithFilterRightBottom() {
  const [filter, setFilter] = useState("")
  const [filteredData, setFilteredData] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    if (!!search && !!filter) {
      const filtered = data.filter(chartData => { 
        return data.filter(searchData => {
          return searchData.pv == chartData.pv
        })
      })
      console.log(filtered)
    }
    else {
      return setFilteredData(undefined)
    }
  }, [search])

  useEffect(() => {
    if (!!filter) {
      const filtered = data.filter(chartData => { // we are in if scope ! so need to save filtered in something we use State in here, use function state to set flag
        return chartData.pv > filter
      })
      setFilteredData(filtered)
    } else {
      return setFilteredData(data)
    }
  }, [filter])
  return (
    <div>
      <button onClick={() => { setFilter("800") }}>800</button>
      <button onClick={() => { setFilter("600") }}>600</button>
      <button onClick={() => { setFilter("400") }}>400</button>
      <button onClick={() => { setFilter("") }}>reset</button>
      <input onChange={(e) => setSearch(e.target.value)}></input>
      <AreaChart
        width={400}
        height={200}
        data={filteredData ? filteredData : data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >

        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </div>
  )
}

export default ChartWithFilterRightBottom
