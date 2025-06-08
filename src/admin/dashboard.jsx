// ./admin/dashboard.jsx
import { Box, H1, Text } from '@adminjs/design-system'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [stats, setStats] = useState({ userCount: null, transactionCount: null })

  useEffect(() => {
    axios.get('/admin/api/dashboard/stats') // This is the combined route from previous step
      .then(res => setStats(res.data))
      .catch(() => setStats({ userCount: 'Error', transactionCount: 'Error' }))
  }, [])

  return (
    <Box variant="grey" p="xl">
      <H1>👋 Welcome to Admin Dashboard</H1>

      <Box mt="xl" display="flex" flexDirection="row" gap="xl">
        <Box variant="white" p="lg" flexGrow={1} boxShadow="card">
          <Text fontSize="lg" fontWeight="bold">👤 Total Users</Text>
          <Text fontSize="xxl">
            {stats.userCount !== null ? stats.userCount : 'Loading...'}
          </Text>
        </Box>

        <Box variant="white" p="lg" flexGrow={1} boxShadow="card">
          <Text fontSize="lg" fontWeight="bold">💰 Total Transactions</Text>
          <Text fontSize="xxl">
            {stats.transactionCount !== null ? stats.transactionCount : 'Loading...'}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
