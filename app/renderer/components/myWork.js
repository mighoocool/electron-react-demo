import React, {Component} from 'react';
import Toolbar from './toolbar';
import {Row, Col} from 'antd';
import {NavLink} from 'react-router-dom';
// import fv from '../../lib/folderView'
const fv = require('../../lib/folderView')

console.log(fv)
export default class Home extends Component {
    componentWillMount = () => {}

    render() {
        return (
            <div>
                <Toolbar push={this.props.history.push}/>
                <div className="home-header">
                    <Row className="tab-wrap text-center">
                        <Col span={12}>
                            <div>
                                <NavLink activeClassName="active" replace to='/my_work'>我的创作</NavLink>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <NavLink activeClassName="active" replace to='/my_work'>原创证据</NavLink>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
