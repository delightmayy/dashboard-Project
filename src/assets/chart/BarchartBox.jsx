import React from 'react'
import { ResponsiveBar } from "@nivo/bar";
import { useContext } from 'react';
import DataContext from '../../context/Context';

const BarchartBox = () => {
    const {dataBar, home }= useContext(DataContext)
  return (
     <ResponsiveBar
              data={dataBar}
              keys={["degress"]}
              indexBy="day"
              margin={!home? { top: 50, right: 40, bottom: 50, left: 60 }:{ top: 10, right: 20, bottom: 30, left: 40 }}
              padding={0.4}
              valueScale={{ type: "linear" }}
              colors="#1f2937"
              animate={true}
              enableLabel={false}
              axisTop={null}
              axisRight={null}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend:!home ? "degrees":"",
                legendPosition: "middle",
                legendOffset: -40,
              }}
            />
  )
}

export default BarchartBox