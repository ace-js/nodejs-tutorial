import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import withUser from './../../../shared/hocs/withUser'
import UserModel from './../../../shared/models/user'

interface Props {
  user: UserModel | null
}

const Login: React.FC<Props> = ({ user }) => {
  console.log('Login: ', user)
  return (
    <div style={{ flexGrow: 1, padding: '2rem' }}>
      <Box style={{height: '100%'}} display="flex" justifyContent="space-between" flexDirection="column">
        <Box justifyContent="flex-start">
          <Typography variant='h3'>Login page</Typography>
        </Box>
        <Box display='flex' alignContent='center' justifyContent="center">
          <Typography>Form</Typography>
        </Box>
        <Box/>
      </Box>
    </div>
  )
}

export default withUser(Login)