import React from "react";
import HeadTitle from "../assets/HeadTitle";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeature } from "../assets/geo/Features";
import useDarkMode from "../Api/useDarkMode";

const Geography = () => {
  const {mode} =useDarkMode()
  const Data = [
    {
      id: "AFG",
      value: 131071,
    },
    {
      id: "AGO",
      value: 664027,
    },
    {
      id: "ALB",
      value: 337633,
    },
    {
      id: "ARE",
      value: 663922,
    },
    {
      id: "ARG",
      value: 339765,
    },
    {
      id: "ARM",
      value: 926575,
    },
    {
      id: "ATA",
      value: 926991,
    },
    {
      id: "ATF",
      value: 605315,
    },
    {
      id: "AUT",
      value: 586911,
    },
    {
      id: "AZE",
      value: 588021,
    },
    {
      id: "BDI",
      value: 88369,
    },
    {
      id: "BEL",
      value: 678223,
    },
    {
      id: "BEN",
      value: 317282,
    },
    {
      id: "BFA",
      value: 452728,
    },
    {
      id: "BGD",
      value: 787638,
    },
    {
      id: "BGR",
      value: 777137,
    },
    {
      id: "BHS",
      value: 588155,
    },
    {
      id: "BIH",
      value: 275268,
    },
    {
      id: "BLR",
      value: 988452,
    },
    {
      id: "BLZ",
      value: 69036,
    },
    {
      id: "BOL",
      value: 271510,
    },
    {
      id: "BRN",
      value: 475805,
    },
    {
      id: "BTN",
      value: 159222,
    },
    {
      id: "BWA",
      value: 608589,
    },
    {
      id: "CAF",
      value: 868913,
    },
    {
      id: "CAN",
      value: 265697,
    },
    {
      id: "CHE",
      value: 485575,
    },
    {
      id: "CHL",
      value: 448236,
    },
    {
      id: "CHN",
      value: 750663,
    },
    {
      id: "CIV",
      value: 75963,
    },
    {
      id: "CMR",
      value: 828732,
    },
    {
      id: "COG",
      value: 695516,
    },
    {
      id: "COL",
      value: 584806,
    },
    {
      id: "CRI",
      value: 1697,
    },
    {
      id: "CUB",
      value: 846484,
    },
    {
      id: "-99",
      value: 685574,
    },
    {
      id: "CYP",
      value: 270741,
    },
    {
      id: "CZE",
      value: 182758,
    },
    {
      id: "DEU",
      value: 655452,
    },
    {
      id: "DJI",
      value: 434076,
    },
    {
      id: "DNK",
      value: 666563,
    },
    {
      id: "DOM",
      value: 940416,
    },
    {
      id: "DZA",
      value: 497261,
    },
    {
      id: "ECU",
      value: 730536,
    },
    {
      id: "EGY",
      value: 201997,
    },
    {
      id: "ERI",
      value: 465243,
    },
    {
      id: "ESP",
      value: 687481,
    },
    {
      id: "EST",
      value: 143814,
    },
    {
      id: "ETH",
      value: 35180,
    },
    {
      id: "FIN",
      value: 305747,
    },
    {
      id: "FJI",
      value: 568795,
    },
    {
      id: "FLK",
      value: 460152,
    },
    {
      id: "FRA",
      value: 844026,
    },
    {
      id: "GAB",
      value: 533753,
    },
    {
      id: "GBR",
      value: 614289,
    },
    {
      id: "GEO",
      value: 187678,
    },
    {
      id: "GHA",
      value: 883801,
    },
    {
      id: "GIN",
      value: 445254,
    },
    {
      id: "GMB",
      value: 208305,
    },
    {
      id: "GNB",
      value: 997131,
    },
    {
      id: "GNQ",
      value: 591798,
    },
    {
      id: "GRC",
      value: 694538,
    },
    {
      id: "GTM",
      value: 528267,
    },
    {
      id: "GUY",
      value: 940612,
    },
    {
      id: "HND",
      value: 348992,
    },
    {
      id: "HRV",
      value: 622341,
    },
    {
      id: "HTI",
      value: 715628,
    },
    {
      id: "HUN",
      value: 52283,
    },
    {
      id: "IDN",
      value: 483287,
    },
    {
      id: "IND",
      value: 88243,
    },
    {
      id: "IRL",
      value: 687917,
    },
    {
      id: "IRN",
      value: 508515,
    },
    {
      id: "IRQ",
      value: 671676,
    },
    {
      id: "ISL",
      value: 242107,
    },
    {
      id: "ISR",
      value: 611285,
    },
    {
      id: "ITA",
      value: 681448,
    },
    {
      id: "JAM",
      value: 90635,
    },
    {
      id: "JOR",
      value: 89676,
    },
    {
      id: "JPN",
      value: 716695,
    },
    {
      id: "KAZ",
      value: 353492,
    },
    {
      id: "KEN",
      value: 719904,
    },
    {
      id: "KGZ",
      value: 679017,
    },
    {
      id: "KHM",
      value: 629443,
    },
    {
      id: "OSA",
      value: 884377,
    },
    {
      id: "KWT",
      value: 407152,
    },
    {
      id: "LAO",
      value: 468501,
    },
    {
      id: "LBN",
      value: 831751,
    },
    {
      id: "LBR",
      value: 322349,
    },
    {
      id: "LBY",
      value: 858908,
    },
    {
      id: "LKA",
      value: 861192,
    },
    {
      id: "LSO",
      value: 713873,
    },
    {
      id: "LTU",
      value: 424418,
    },
    {
      id: "LUX",
      value: 219542,
    },
    {
      id: "LVA",
      value: 944741,
    },
    {
      id: "MAR",
      value: 892138,
    },
    {
      id: "MDA",
      value: 183646,
    },
    {
      id: "MDG",
      value: 868714,
    },
    {
      id: "MEX",
      value: 454958,
    },
    {
      id: "MKD",
      value: 853014,
    },
    {
      id: "MLI",
      value: 369611,
    },
    {
      id: "MMR",
      value: 721333,
    },
    {
      id: "MNE",
      value: 4094,
    },
    {
      id: "MNG",
      value: 370157,
    },
    {
      id: "MOZ",
      value: 568557,
    },
    {
      id: "MRT",
      value: 848185,
    },
    {
      id: "MWI",
      value: 56502,
    },
    {
      id: "MYS",
      value: 591832,
    },
    {
      id: "NAM",
      value: 14683,
    },
    {
      id: "NCL",
      value: 122572,
    },
    {
      id: "NER",
      value: 336660,
    },
    {
      id: "NGA",
      value: 39458,
    },
    {
      id: "NIC",
      value: 459619,
    },
    {
      id: "NLD",
      value: 742505,
    },
    {
      id: "NOR",
      value: 169230,
    },
    {
      id: "NPL",
      value: 59049,
    },
    {
      id: "NZL",
      value: 888070,
    },
    {
      id: "OMN",
      value: 371727,
    },
    {
      id: "PAK",
      value: 218244,
    },
    {
      id: "PAN",
      value: 660581,
    },
    {
      id: "PER",
      value: 432830,
    },
    {
      id: "PHL",
      value: 655153,
    },
    {
      id: "PNG",
      value: 92045,
    },
    {
      id: "POL",
      value: 426392,
    },
    {
      id: "PRI",
      value: 102267,
    },
    {
      id: "PRT",
      value: 227912,
    },
    {
      id: "PRY",
      value: 33762,
    },
    {
      id: "QAT",
      value: 43376,
    },
    {
      id: "ROU",
      value: 821055,
    },
    {
      id: "RUS",
      value: 982841,
    },
    {
      id: "RWA",
      value: 440820,
    },
    {
      id: "ESH",
      value: 235788,
    },
    {
      id: "SAU",
      value: 331268,
    },
    {
      id: "SDN",
      value: 180859,
    },
    {
      id: "SDS",
      value: 222865,
    },
    {
      id: "SEN",
      value: 972520,
    },
    {
      id: "SLB",
      value: 319936,
    },
    {
      id: "SLE",
      value: 179970,
    },
    {
      id: "SLV",
      value: 638715,
    },
    {
      id: "ABV",
      value: 350684,
    },
    {
      id: "SOM",
      value: 710693,
    },
    {
      id: "SRB",
      value: 441641,
    },
    {
      id: "SUR",
      value: 308643,
    },
    {
      id: "SVK",
      value: 168196,
    },
    {
      id: "SVN",
      value: 899138,
    },
    {
      id: "SWZ",
      value: 261083,
    },
    {
      id: "SYR",
      value: 771100,
    },
    {
      id: "TCD",
      value: 856973,
    },
    {
      id: "TGO",
      value: 264083,
    },
    {
      id: "THA",
      value: 835892,
    },
    {
      id: "TJK",
      value: 869337,
    },
    {
      id: "TKM",
      value: 77536,
    },
    {
      id: "TLS",
      value: 107215,
    },
    {
      id: "TTO",
      value: 712039,
    },
    {
      id: "TUN",
      value: 5445,
    },
    {
      id: "TUR",
      value: 66592,
    },
    {
      id: "TWN",
      value: 679455,
    },
    {
      id: "TZA",
      value: 778490,
    },
    {
      id: "UGA",
      value: 220315,
    },
    {
      id: "UKR",
      value: 742874,
    },
    {
      id: "URY",
      value: 396554,
    },
    {
      id: "USA",
      value: 202289,
    },
    {
      id: "UZB",
      value: 85034,
    },
    {
      id: "VEN",
      value: 394614,
    },
    {
      id: "VNM",
      value: 736162,
    },
    {
      id: "VUT",
      value: 529533,
    },
    {
      id: "PSE",
      value: 561917,
    },
    {
      id: "YEM",
      value: 310878,
    },
    {
      id: "ZAF",
      value: 890921,
    },
    {
      id: "ZMB",
      value: 356064,
    },
    {
      id: "ZWE",
      value: 958578,
    },
    {
      id: "KOR",
      value: 567272,
    },
  ];
  return (
    <div className=" dark:bg-gray-500  dark:text-gray-200  text-gray-700 overflow-x-auto scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1 h-full">
      <HeadTitle
        Title={"geography"}
        subTitle={"view client location around the world "}
      />
      <p className="px-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        saepe. Eum et, ipsam quam dolorum at sit. Aut voluptatibus ad in
        consequatur ipsa voluptatum id, provident hic, modi repudiandae
        exercitationem.
      </p>
      <div className="h-5/6 px-1  pt-6  dark:bg-gray-600/30 mt-2 bg-gray-400  text-gray-700 ">
        <ResponsiveChoropleth
          data={Data}
          features={geoFeature.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionType="azimuthalEqualArea"
          projectionScale={100}
          fillColor="nivo"
          graticuleLineWidth={1}
          isInteractive
          legendColour={mode ? "white" : "#333333"}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
            {
              id: "gradient",
              type: "linearGradient",
              colors: [
                {
                  offset: 0,
                  color: "#000",
                },
                {
                  offset: 100,
                  color: "inherit",
                },
              ],
            },
          ]}
          fill={[
            {
              match: {
                id: "CAN",
              },
              id: "dots",
            },
            {
              match: {
                id: "CHN",
              },
              id: "lines",
            },
            {
              match: {
                id: "ATA",
              },
              id: "gradient",
            },
          ]}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Geography;
