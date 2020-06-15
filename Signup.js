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

      {/* <Form.Item
        name="username"
        label="Username"
        rules={[
        { 
            required: true, 
            message: 'Please input your username!'
        },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>     */}
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

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item> */}

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

      <p>What is your stage in life?</p>
      <select name="stage" id="stage">
                <option value="Working Professional">Working Professional</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Retired">Retired</option>
                <option value="College Student">College Student</option>
                <option value="High School Student">High School Student</option>
      </select>
      

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
            message: 'The input is not valid E-mail!',
          },
          {
            required: false,
            message: 'Please input your E-mail!',
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
            message: 'The input is not valid E-mail!',
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
        <Input placeholder="MTC, CST, ET" />
      </Form.Item>

      <Form.Item
        name=""
        label="Have you ever been arrested, charged, 
        or convected of child abuse or molestation of any form?"
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
        <Input placeholder="Yes, No" />
      </Form.Item>

      <Form.Item
        name=""
        label="Can you commit to being a mentor for a min of 4 months?"
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
        <Input placeholder="Yes, No" />
      </Form.Item>

      

        <div>
          <h1>Here is how you can 
            support your mentee. Your donation covers more than you think.</h1>
        </div>
      
      <Form.Item
        name=""
        label="Donation"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: '',
          },
        ]}
      >
        <Input placeholder="$5" />
      </Form.Item>

      <Form.Item
        name=""
        label="Stripe Credit Card"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: 'Please enter your credit card number',
          },
        ]}
      >
        <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
      </Form.Item>

      <Form.Item
        name=""
        label="Name on Card"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: 'Please enter Card Name',
          },
        ]}
      >
        <Input placeholder="Visa, MasterCard" />
      </Form.Item>

      <Form.Item
        name=""
        label="Would you like to get more involved?"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: 'Yes, No',
          },
        ]}
      >
        <Input placeholder="Yes, No" />
      </Form.Item>

      <Form.Item
        name=""
        label="We are a volunteer organization so any
         talents or skill you are willing to share 
         can help grow the Mentor Program"
        label="How would you like to get more involved?"
        rules={[
          {
            type: 'string',
            message: '',
          },
          {
            required: false,
            message: 'Yes, No',
          },
        ]}
      >
        <Input placeholder="Yes, No" />
      </Form.Item>



      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
      >
        
        <Checkbox>
          I have read the <a href="/agreement">agreement</a>
        </Checkbox>
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