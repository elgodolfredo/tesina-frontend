import { GridItem, Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Loading from '../components/Loading'
import React from 'react';
import { UserContext } from '../contexts/UserContext';

export default function RootLayout() {

  const { loaded } = React.useContext(UserContext);

  return <>
    {loaded ? <>
      <Header></Header>
      <Grid
        templateColumns='repeat(10, 1fr)'
      >
        <GridItem colSpan={2}>
          <Sidebar></Sidebar>
        </GridItem>
        <GridItem colSpan={8} bg='gray.100' p={10}>
          <Outlet />
        </GridItem>
      </Grid>
    </> : <Loading></Loading>}
  </>
}
