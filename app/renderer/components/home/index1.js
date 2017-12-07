import React, {Component} from 'react';
import styles from './index.less';
import Toolbar from '../toolbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Toolbar push={this.props.history.push}/>
                <div className={styles.homeHeader}>
                    <div className={styles.tabWrap}>home</div>
                </div>
            </div>
        )
    }
}
