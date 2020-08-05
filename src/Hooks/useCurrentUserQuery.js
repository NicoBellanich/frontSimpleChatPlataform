import GET_USERDATA from '../Apollo/Queries/User'
import { useQuery } from '@apollo/react-hooks'

const useCurrentUserQuery = () => {
  const { data, error, loading } = useQuery(GET_USERDATA)

  return {
    error,
    loading,
    currentUser: data && data.currentUser
  }
}

export default useCurrentUserQuery
