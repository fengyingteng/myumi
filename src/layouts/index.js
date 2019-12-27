import styles from './index.css';
import {connect} from 'dva'
import withRouter from 'umi/withRouter'
import {Table, Button} from 'antd'

const BasicLayout = ({app, loading, dispatch}) => {
  console.log('loading===', loading)

  const {list} = app;
  const columns = [
    {
      title: '城市名',
      dataIndex: 'name',
    },
    {
      title: '值',
      dataIndex: 'value',
    },
    {
      title: '类型',
      dataIndex: 'name',
      render:(text, record) => {
        return <Button type='primary'>{record.type}</Button>
      }
    }
  ]

  const handleClick =() => {
    console.log(1111)
    dispatch({
      type: 'app/queryLogin'
    })
  }
  return (
    <div className={styles.normal}>
    test
        {/* {props.children} */}
        <Table 
          columns={columns} 
          dataSource={list.list}
          rowKey={record => record.id}
          loading={loading.effects['/app/queryLogin']} 
          pagination={{
            pageSize: 2,
            showQuickJumper: true,
            total: 5
          }}
        />
        <Button onClick={handleClick} type='primary'>重新加载</Button>
    </div>
  );
}


export default connect(({app, loading}) =>({app, loading}))( withRouter(BasicLayout));



