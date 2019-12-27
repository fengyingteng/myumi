import styles from './index.css';
import {connect} from 'dva'
import withRouter from 'umi/withRouter' 

// export default function(props) {
//   return (
//     <div className={styles.normal}>
//         {props.children}
//     </div>
//   );
// }

const App = (props) => {
  return (
    <div className={styles.normal}>
        {props.children}
    </div>
  )
}


export default connect(({app, loading}) => ({app, loading}))(withRouter(App))