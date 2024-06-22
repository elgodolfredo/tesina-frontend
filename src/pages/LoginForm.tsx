import { Flex, Text, Heading, Stack, useColorModeValue, Box, Button } from "@chakra-ui/react";
import { app } from "../config/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function LoginForm() {

  const loginWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return <Flex
    minH={'88vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Entrar
        </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          para utilizar nuestras herramientas
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <Stack spacing={4} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              onClick={loginWithGoogle}
              _hover={{
                bg: 'blue.500',
              }}>
              Entrar con google
            </Button>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Registrarse
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
}
