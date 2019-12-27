import React from 'react'
import {withRouter} from 'dva/router'
import {connect} from 'dva'

const Login = () => {
    return (
        <div>Login</div>
    )
}


export default connect()(withRouter(Login))