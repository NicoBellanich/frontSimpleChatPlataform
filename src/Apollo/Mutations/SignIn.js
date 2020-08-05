import { gql } from 'apollo-boost'

export default gql`
  mutation signIn($data: SigninInput!) {
    signIn(data: $data) {
      user {
        id
        firstname
        lastname
        username
      }
      authError
      jwt
    }
  }
`
