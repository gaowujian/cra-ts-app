import React from 'react';
import ChartSpace, {
  type ILineSpec,
  EnumNumUnit,
} from '@arco-design/chart-space';
import { useAsyncEffect } from '@byted/hooks';
interface LineChartProps {
  className?: string;
  style?: React.CSSProperties;
}

const CHART_CONTAINER_DOM_ID = 'chart';
const LineChart: React.FC<LineChartProps> = (props) => {
  const { className, style } = props;

  useAsyncEffect(async () => {
    // 声明图表 spec
    const spec: ILineSpec = {
      type: 'line',
      data: [
        {
          name: 'line',
          fields: {
            y: {
              alias: '最低气温',
            },
          },
          values: [
            {
              x: '2:00',
              y: 8,
            },
            {
              x: '4:00',
              y: 9,
            },
            {
              x: '6:00',
              y: 11,
            },
            {
              x: '8:00',
              y: 14,
            },
            {
              x: '10:00',
              y: 16,
            },
            {
              x: '12:00',
              y: 17,
            },
            {
              x: '14:00',
              y: 17,
            },
            {
              x: '16:00',
              y: 16,
            },
            {
              x: '18:00',
              y: 15,
            },
          ],
        },
      ],
      labels: {
        visible: false,
      },
      hover: {
        dimension: {
          enable: true,
        },
      },
      axes: [
        {
          orient: 'left',
          zero: true,
          range: {
            max: 30,
          },
          label: {
            format: {
              name: 'formatNumber',
              type: 'digit',
              unit: EnumNumUnit.CN_QW,
              // unit: '‎°C',
            },
          },
        },
        {
          orient: 'bottom',
        },
      ],
      xField: 'x',
      yField: 'y',
    };

    const chartSpace = new ChartSpace(CHART_CONTAINER_DOM_ID, spec);
    await chartSpace.renderAsync();
    console.log('chartSpace:', chartSpace);
    return () => {};
  }, []);

  return <div className={className} style={style} id="chart"></div>;
};

export default LineChart;
