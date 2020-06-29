import React, { useState, useEffect } from 'react'
import { AreaChart, Area, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 998, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 700, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 730, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 500, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 230, amt: 2100,
  },
];
function ChartWithFilterLeftTop(props) {
  const [filter, setFilter] = useState("")
  const [filteredData, setFilteredData] = useState()
  const [search, setSearch] = useState()
  useEffect(() => {
    if (!!search) {
      const searched = data.filter(searchData => {
        return searchData.pv > search
      })
      setFilteredData(searched)
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
        width={450}
        height={200}
        data={filteredData ? filteredData : data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  )
}

export default ChartWithFilterLeftTop
