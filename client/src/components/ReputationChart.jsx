import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const ReputationChart = ({ data1 }) => (
  <ResponsiveLine
    data={data1}
    margin={{ top: 10, right: 70, bottom: 50, left: 70 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: -20,
      max: 20,
      stacked: true,
      reverse: false,
    }}
    curve="monotoneX"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    enableGridY={false}
    colors="#4497A3"
    lineWidth={3}
    pointSize={8}
    pointColor="#4497A3"
    pointLabelYOffset={-12}
    enableCrosshair={false}
    useMesh={true}
    legends={[]}
  />
);

export default ReputationChart;
