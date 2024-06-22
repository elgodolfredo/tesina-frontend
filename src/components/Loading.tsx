import { AbsoluteCenter, Box, Spinner } from '@chakra-ui/react'


export default function Loading() {

  return <Box position='relative' h="100vh">
    <AbsoluteCenter>
      <Spinner></Spinner>
    </AbsoluteCenter>
  </Box>
}
