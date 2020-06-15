import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import CustomForm from './Form';


class ArticleDetail extends React.Component {
    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
          this.setState({
            article: res.data
          });
        });
    }

    onDelete = (event) => {
        if(this.props.token !== null) {
            const articleID = this.props.match.params.articleID;
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Token ${this.props.token}`
            }
            axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push('/');
                    this.forceUpdate();
                }
            })
        } else {
            console.log("Null token");
        }
    };

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm
                    {...this.props}
                    token={this.props.token}
                    requestType ="put"
                    articleID = {this.props.match.params.articleID}
                    btnText="Update"
                />
                <form onSubmit={this.onDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    }
  }

export default connect(mapStateToProps)(ArticleDetail);