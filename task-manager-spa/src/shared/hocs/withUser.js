import React from 'react'

import { UserContextConsurmer } from "../contexts/user-context";

const withUser = WrappedComponent => (props) => (
    <UserContextConsurmer>
        {user => <WrappedComponent {...props} user={user} />}
    </UserContextConsurmer>
) 

export default withUser