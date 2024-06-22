import { Alert, AlertIcon, Button, Card, CardBody, CardHeader, FormControl, FormLabel, Heading, Input, Select, VStack } from '@chakra-ui/react';
import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { Chart } from '../interfaces';
import { useNavigate } from 'react-router-dom';

export default function NewChartPage() {

  const [newChart, setNewChart] = React.useState<Chart>({
    id: 0,
    userId: 0,
    sensorId: 0,
    type: 'line',
    index: '',
    name: '',
    search_function_name: '',
  });
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const { sensors, createChart } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    setErrorMessage('');
  }, [newChart]);


  const create = async () => {
    try {
      const chart = await createChart(newChart)
      navigate(`/charts/${chart.id}`)
    } catch (error: any) {
      console.log(error)
      if (error && error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Hubo un error al crear el gráfico');
      }
    }
  }

  return <Card>
    <CardHeader>
      <Heading size={'md'}>Crear sensor</Heading>
    </CardHeader>
    <CardBody>
      <VStack gap={5}>
        <FormControl>
          <FormLabel>
            Nombre
          </FormLabel>
          <Input name='name' onChange={(e) => setNewChart({ ...newChart, name: e.currentTarget.value })}></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Sensor</FormLabel>
          <Select value={newChart.sensorId} onChange={(e) => setNewChart({ ...newChart, sensorId: Number(e.currentTarget.value) })}>
            <option value="">--</option>
            {sensors.map((s) => {
              return <option value={s.id} key={s.id}>{s.name}</option>
            })
            }</Select>
        </FormControl>
        <FormControl>
          <FormLabel>Tipo</FormLabel>
          <Select onChange={(e) => setNewChart({ ...newChart, type: e.currentTarget.value })}>
            <option value='line'>Line</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Index</FormLabel>
          <Input name='index' onChange={(e) => setNewChart({ ...newChart, index: e.currentTarget.value })}></Input>
        </FormControl>
        <Button onClick={() => { create() }}>Crear</Button>
        {errorMessage ? <Alert status='error'>
          <AlertIcon />{errorMessage}</Alert> : null}
      </VStack>
    </CardBody>
  </Card >
}
