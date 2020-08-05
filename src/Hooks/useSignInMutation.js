import SIGN_IN from './../Apollo/Mutations/SignIn'
import { useMutation } from '@apollo/react-hooks'

const useSignInMutation = () => {
  const [mutate, { error, loading }] = useMutation(SIGN_IN, {
    update: (cache, mutationResult) => {
      localStorage.setItem('token', mutationResult.data.signIn.jwt)
      cache.writeData({
        data: {
          token: mutationResult.data.signIn.jwt,
          currentUser: mutationResult.data.signIn.user
        }
      })
    }
  })

  return {
    error,
    loading,
    signInUser: async (input) => {
      const { data } = await mutate({
        variables: {
          data: input
        }
      })
      return data && data.signIn
    }
  }
}

export default useSignInMutation
