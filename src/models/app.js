import {routerRedux} from 'dva/router'
import fetch from '../utils/fetch.js'


export default {
    namespace: 'app',
    state: {
        list: [],
    },
    subscriptions: {
        setup({history, dispatch}) {
            history.listen((location) => {
               dispatch({
                   type: 'queryLogin'
               })
            })
        }
    },
    effects: {
        *queryLogin({payload}, {call, put}) {
            let token = window.localStorage.getItem('token')
            const data = yield call(fetch, '/api/tages')
            console.log(data)
            const {location} = window;
            const gotoLogin = () => {
                if (location.pathname !== '/login') {
                    let _from = location.pathname;
                    console.log('_from', _from)
                    window.location = `${location.origin}/login?from=${_from}`
                }
            }
            if (!token) {
                gotoLogin()
                return
            } 
            yield put ({
                type: 'querySuccess',
                payload: {
                    list: data
                }
            })
            
        }
    },
    reducers: {
        querySuccess(state, {payload}) {
            return {...state, ...payload}
        }
    }
}