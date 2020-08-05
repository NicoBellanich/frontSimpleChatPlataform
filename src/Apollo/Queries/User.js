import { gql } from 'apollo-boost'

export default gql`
  query currentUser {
    currentUser {
      id
      firstname
      lastname
      username
      salt
      password
    }
  }
`
