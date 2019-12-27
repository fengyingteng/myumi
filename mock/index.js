import Mock from 'mockjs'

var Random = Mock.Random
var domain = Random.url()

export default {
    'POST /api/tages': Mock.mock({
        'list|5' : [
            {
                name: '@city', 
                'value|+1': 1,
                'type|0-1': 1,
                'id|1-10':'@id',
            }
        ]
    }),
    '/api/getToken': Mock.mock({
        'token': Random.string(56)
    }),
    '/api/getUser': Mock.mock({
        'user': {name: '@name', 'age|+1': 22, 'sex|1-2': 'man' }
    })
}

