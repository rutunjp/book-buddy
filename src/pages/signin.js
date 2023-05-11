import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { useRouter } from 'next/router'
import { handleSignInWithGoogle } from '../../firebase-config'
import { useEffect, useState } from 'react'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase-config'
import SignInUsingGoogleBtn from '@/components/signInUsingGoogleBtn'
export default function Signin() {
  const router = useRouter()
  const [userFormValues, setUser] = useState({
    userName: '',
    email: '',
    password: '',
  })
  // const [signInWithEmailAndPassword, user, loading, error] =
  //   useSignInWithEmailAndPassword(auth)

  const userHandler = (e) => {
    const { name, value } = e.target

    console.log(name, ':', value)
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      }
    })
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={userHandler} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={userHandler} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Sign in
              </Button>
              <SignInUsingGoogleBtn />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

function signInUsingEmail() {}
