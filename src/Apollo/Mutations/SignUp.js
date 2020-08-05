import { gql } from 'apollo-boost'

export default gql`
  mutation signUp($data: SignupInput!) {
    signUp(data: $data) {
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
