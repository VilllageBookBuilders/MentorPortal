import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
    onFinish = async(values, requestType, articleID) => {
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`,
      };
      
      if (requestType === "post") {
        await axios.post("http://127.0.0.1:8000/api/create/", values)
          .then(res => {
            if (res.status === 201) {
              this.props.history.push(`/`);
            }
          })
      } else if (requestType === "put") {
        await axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, values)
          .then(res => {
            if (res.status === 200) {
              this.props.history.push(`/`);
            }
          })
      }
    };

    render() {
        return (
            <div>
              <Form onFinish={(values) => this.onFinish(
                  values,
                  this.props.requestType,
                  this.props.articleID
              )}>
                <Form.Item label="Title" name="title">
                  <Input placeholder="Put a title here"/>
                </Form.Item>
                <Form.Item name="content" label="Content">
                  <Input placeholder="Put some content here"/>
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
              </Form>
            </div>
          );
    }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(CustomForm);