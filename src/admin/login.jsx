import { Box, H1, Text } from '@adminjs/design-system'
import { useTranslation } from 'adminjs'
import { Login } from '@adminjs/express'

const CustomLogin = () => {
  const { translateLabel } = useTranslation()

  return (
    <Box flex flexDirection="column" justifyContent="center" alignItems="center" mt="xl">
      <H1>Welcome to Vmost Admin</H1>
      <Text mt="lg">Please login to access your admin panel.</Text>
      <Box mt="xxl" width="100%" maxWidth="400px">
        <Login />
      </Box>
    </Box>
  )
}

export default CustomLogin
