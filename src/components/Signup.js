import React from 'react';
import {
  Form,
  Dropdown,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd';
import * as actions from '../store/actions/auth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const { Option } = Select;

const RegistrationForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    props.onAuth(values.username, values.email, values.password, values.confirm);
    props.history.push('/');
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      <h1>Mentor Application</h1>

      <Form.Item
        name=""
        label="Name"
        
        rules={[
          {
            type: '',
            message: '',
          },
          {
            required: true,
            message: 'Please enter your fist and last name!',
          },
        ]}
      >
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </Form.Item>
      

      
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        Or
        <NavLink to='/login/'> login</NavLink>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);