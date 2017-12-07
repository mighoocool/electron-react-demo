import {Form, Icon, Input, Button, Checkbox} from 'antd';
import React, {Component} from 'react';
import Toolbar from './toolbar';
// import Toolbar from '../../containers/toolBar'
import {Row, Col} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.login(values)
        }
      });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    console.log(this.props)
    return (
      <div>
        <Toolbar push={this.props.history.push}/>
        <div className='bg-base' style={{
          height: '200px'
        }}>bqj</div>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]
                })(
                  <Input
                    prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Username"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]
                })(
                  <Input
                    prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                    type="password"
                    placeholder="Password"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('imageCode', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your code!'
                    }
                  ]
                })(
                  <Input
                    prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                    type="text"
                    placeholder="img code"/>
                )}
                
              </FormItem>

              <img onClick={e => this.props.refershImageCode(e.target)} className="img-code" data-src={`${ctx}/image/validate`} src={`${ctx}/image/validate`} alt=""/>
              <input type="submit" value='login'/>
            </Form>
          </Col>
        </Row>

      </div>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login