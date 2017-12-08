import React, {Component} from 'react';
import Toolbar from './toolbar';
import {Row, Col} from 'antd';
import {NavLink} from 'react-router-dom';
import fs from 'fs';
import path from 'path'
import electron,{remote} from 'electron'
import configLib from '../../lib/configLib'
export default class Home extends Component {
    constructor(arg){
        super(arg)
        this.state = {
            folderList : [],
            basePath:path.resolve(__dirname+'./'),
            currPath:'',
        }
    }
    componentWillMount = () => {
        this.getFolderList()
        console.log(path.resolve('./'))
        console.log(remote.app.getPath('userData'))
        console.log(configLib)
    }
    getFolderList = () =>{
        const {basePath,currPath} = this.state;
        console.log(fs.readdirSync(basePath))
        this.setState({
            folderList:fs.readdirSync(basePath)
        })
    }
    setPath = (path) =>{
        console.log()
    }
    render() {
        const {
            folderList,
        } = this.state;
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
                <div className='mywork-body'>
                    <ul>
                        {folderList.map((list)=>(
                            <li onClick={()=>this.setPath(list)} key={list}>{list}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
