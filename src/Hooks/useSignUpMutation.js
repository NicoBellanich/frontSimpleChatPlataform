import SIGN_UP from './../Apollo/Mutations/SignUp'
import { useMutation } from '@apollo/react-hooks'

const useSignUpMutation = () => {
  const [mutate, { error, loading }] = useMutation(SIGN_UP, {
    update: (cache, mutationResult) => {
      localStorage.setItem('token', mutationResult.data.signUp.jwt)
      cache.writeData({ data: { token: mutationResult.data.signUp.jwt } })
    }
  })
  return {
    error,
    loading,
    signUpUser: async (input) => {
      const { data } = await mutate({
        variables: {
          data: input
        }
      })
      return data && data.signUp
    }
  }
}

export default useSignUpMutation
