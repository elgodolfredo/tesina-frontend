import { Alert, AlertIcon, Button, Card, CardBody, CardHeader, FormControl, FormLabel, Grid, GridItem, Heading, Input, Table, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { Sensor } from '../interfaces';

export default function NewSensorPage() {

  const [newSensor, setNewSensor] = React.useState<Sensor>({
    id: 0,
    user_id: 0,
    name: '',
  });
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const { sensors, createSensor } = React.useContext(UserContext);

  React.useEffect(() => {
    setErrorMessage('');
  }, [newSensor]);


  const create = async () => {
    try {
      await createSensor(newSensor)
    } catch (error: any) {
      console.log(error)
      if (error && error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Hubo un error al crear el sensor');
      }
    }
  }

  return <Grid templateColumns='repeat(2, 1fr)'>
    <GridItem>
      <Card>
        <CardHeader>
          <Heading size={'md'}>Crear sensor</Heading>
        </CardHeader>
        <CardBody>
          <VStack gap={5}>
            <FormControl>
              <FormLabel>
                Nombre
              </FormLabel>
              <Input name='name' onChange={(e) => setNewSensor({ ...newSensor, name: e.currentTarget.value })}></Input>
            </FormControl>
            <Button onClick={() => { create() }}>Crear</Button>
            {errorMessage ? <Alert status='error'>
              <AlertIcon />{errorMessage}</Alert> : null}
          </VStack>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardBody>
          <Table>
            <Thead>
              <Th>Nombre</Th>
            </Thead>
            <Tbody>
              {sensors.map((s) => <Tr key={s.id}>
                <Td>{s.name}</Td>
              </Tr>)}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </GridItem>
  </Grid>
}
