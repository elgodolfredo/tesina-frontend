import { GridItem, Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function RootLayout() {
  return <>
    <Header></Header>
    <Grid
      templateColumns='repeat(10, 1fr)'
    >
      <GridItem colSpan={2}>
        <Sidebar></Sidebar>
      </GridItem>
      <GridItem colSpan={8} bg='green.300'>
        <Outlet />
      </GridItem>
    </Grid>
  </>
}
