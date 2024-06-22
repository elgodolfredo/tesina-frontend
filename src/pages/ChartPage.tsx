import { Card, CardBody, CardHeader, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { UserContext } from '../contexts/UserContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart } from '../interfaces';
import { useParams } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);

function getHours(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let hoursStr = hours.toString();
  let minutesStr = minutes.toString();
  if (hours < 10) {
    hoursStr = `0${hours}`;
  }
  if (minutes < 10) {
    minutesStr = `0${minutes}`;
  }
  return `${hoursStr}:${minutesStr}`;
}

export default function ChartPage() {
  const { getChart, charts, getChartData } = React.useContext(UserContext);
  const [data, setData] = React.useState<any>({ labels: [], datasets: [] });
  const [date, setDate] = React.useState<string>('2021-09-17');
  const [chart, setChart] = React.useState<Chart | null>(null);
  const params = useParams();
  const id = Number(params.id);

  React.useEffect(() => {
    const foundChart = getChart(id);
    setChart(foundChart);
  }, [charts, params])

  React.useEffect(() => {
    if (!chart) {
      return;
    }
    getChartData(chart, date).then((points: any) => {
      const labels: string[] = [];
      const dataPoints = [];

      for (const point of points) {
        const date = new Date(point.ts);
        const hourLabel = getHours(date);
        if (!labels.includes(hourLabel)) {
          labels.push(hourLabel)
        }
        dataPoints.push(point[chart.index]);
      }

      setData({
        labels,
        datasets: [{
          label: chart.index,
          data: dataPoints,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
        ]
      })

    });
  }, [chart, date]);

  return <>
    <Card>
      <CardHeader>
        <Heading size="md">{chart?.name}</Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Fecha</FormLabel>
          <Input value={date} type='date' onChange={(e) => setDate(e.currentTarget.value)} />
        </FormControl>
        <Line data={data}></Line>
      </CardBody>
    </Card>
  </>
}
