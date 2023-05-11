import { Button, Flex } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../../firebase-config'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
export default function SignInUsingGoogleBtn() {
  const router = useRouter()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  if (user) {
    router.push('/home')
  } else if (error) {
    console.log(error)
  }
  return (
    <Button
      loadingText="Submitting"
      size="lg"
      bg={'blue.200'}
      color={'blue.900'}
      _hover={{
        bg: 'blue.500',
      }}
      onClick={() => {
        signInWithGoogle()
      }}
    >
      <Flex flexDir={'row'} gap="3" alignItems={'center'}>
        <FcGoogle />
        Sign in With Google
      </Flex>
    </Button>
  )
}
