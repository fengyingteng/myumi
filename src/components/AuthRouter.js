import {Fragment} from 'react'
import Redirect from 'umi/redirect'
import withRouter from 'umi/withRouter'
import {message, Button} from 'antd'

const authPrevated = (props) => {

    const handleClick = () => {
        message.warning('test click')
    }
    let token = window.localStorage.getItem('token')
    if (!token) {
        message.info('请先登录')
        window.localStorage.setItem('token', 'test')
        return <Redirect to='/login' />
    }
    return (
        <Fragment>
            {props.children}
            <Button type='primary' onClick={handleClick}>test</Button>
        </Fragment>
    )
}

export default withRouter(authPrevated)
