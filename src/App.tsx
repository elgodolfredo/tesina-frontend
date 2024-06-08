import './App.css'
import { Grid, GridItem, Box } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Box as='nav'>Headerr</Box>
      <Grid
        gap='1'
        color='blackAlpha.700'
        templateColumns='repeat(6, 1fr)'
      >
        <GridItem colSpan={2} pl='2' bg='pink.300'>
          Nav
        </GridItem>
        <GridItem colSpan={4} bg='green.300'>
          Main
        </GridItem>
      </Grid>
    </>
  )
}

export default App
