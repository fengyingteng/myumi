import React from 'react'
import {withRouter} from 'dva/router'
import {connect} from 'dva'
import './index.less'

const User = () => {
    return (
        <div className='test'>ser</div>
    )
}


export default connect()(withRouter(User))