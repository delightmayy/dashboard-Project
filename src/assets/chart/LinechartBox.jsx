import React from 'react'
import { ResponsiveLine } from "@nivo/line";
import useDarkMode from "../../Api/useDarkMode";
import { useContext } from 'react';
import DataContext from '../../context/Context';

const LinechartBox = () => {
    const {dataLine,home}= useContext(DataContext)
  return (
     <ResponsiveLine
               animate
               areaOpacity={0.07}
               colors={["rgb(97, 205, 187)", "rgb(244, 117, 96)"]}
               crosshairType="cross"
               curve="monotoneX"
               data={dataLine}
               enableArea
               enablePointLabel
               enableTouchCrosshair
              
               initialHiddenIds={["cognac"]}
               margin={home?{
                 bottom: 25,
                 left: 35,
                 right: 25,
                 top: 25,
               }:{
                bottom: 60,
                left: 50,
                right: 20,
                top: 20,
              }}
               pointBorderColor={{
                 from: "color",
                 modifiers: [["darker", 0.3]],
               }}
               pointBorderWidth={1}
               pointLabelYOffset={-20}
               pointSize={14}
               pointSymbol={function noRefCheck() {}}
               useMesh
              
               xScale={{
                 type: "linear",
               }}
               yScale={{
                 max: 1,
                 min: -1,
                 stacked: false,
                 type: "linear",
               }}
             />
  )
}

export default LinechartBox