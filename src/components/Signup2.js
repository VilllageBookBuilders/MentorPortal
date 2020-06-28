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

      

       <Form.Item
        name="phone"
        label="Phone (Optional)"
        rules={[
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item> 


      
      
      {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item> */}

      <p>Which of the following best describes you?</p>
      <select name="stage" id="stage">
                <option value="Working Professional">Working Professional</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Retired">Retired</option>
                <option value="College Student">College Student</option>
                <option value="High School Student">High School Student</option>
      </select>

      <Form.Item
        name=""
        label="What organization or school are you affiliated with?"
        
        rules={[
          {
            type: '',
            message: 'If none, leave blank',
          },
          {
            required: false,
            message: 'Please enter your fist and last name!',
          },
        ]}
      >
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </Form.Item>
      

      <p>How did you hear about this opportunity?</p>

              <select name="hear" id="hear">
                <option value="Friend">Friend</option>
                <option value="Google">Google</option>
                <option value="FaceBook">FaceBook</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="JustServe">JustServe</option>
                <option value="VolunteerMatch">VolunteerMatch</option>
                <option value="Through my organization/school">Through my organization/school</option>
                <option value="Other">Other</option>
              </select>

      <Form.Item
        name="languague"
        label="What languages can you speak comfortably?"
        rules={[
          {
            type: 'language',
            message: '',
          },
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input placeholder="Language" />
      </Form.Item>

      <Form.Item
        name="timeZone"
        label="What is your time zone? (ex MST, CST)"
        rules={[
          {
            type: 'time',
            message: '',
          },
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input placeholder="MTC, CST, ET" />
      </Form.Item>

      <Form.Item
        name=""
        label="Please list our three times you would 
        be Available weekly for your 30 minutes time 
        slot with your mentee (ex Monday 7pm to 9pm CST)"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: true,
            message: 'Please enter your availability',
          },
        ]}
      >
        <Input placeholder="Monday 7pm to  7:30pm CST" />
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