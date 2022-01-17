import { ResponsivePie } from '@nivo/pie';

const KeywordsChart = ({ data2 }) => (
  <ResponsivePie
    data={data2}
    margin={{ top: 50, right: 60, bottom: 80, left: 60 }}
    startAngle={90}
    endAngle={-90}
    innerRadius={0.85}
    padAngle={1.5}
    cornerRadius={45}
    activeOuterRadiusOffset={8}
    colors={['#E34B4B', '#33B294']}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
    arcLinkLabelsDiagonalLength={5}
    arcLinkLabelsStraightLength={10}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    legends={[]}
  />
);

export default KeywordsChart;
