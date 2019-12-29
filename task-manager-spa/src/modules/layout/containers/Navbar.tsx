import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
      height: '80px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: '2.6rem',
      fontWeight: 600
    },
  }));

const Navbar: React.FC = () => {
    const classes = useStyles()
    return (
    <AppBar className={classes.root} position='static' color='primary'>
        <Toolbar>
            <Typography variant='h1' className={classes.title}> Task manager </Typography>
        </Toolbar>
    </AppBar>
)
}
export default Navbar