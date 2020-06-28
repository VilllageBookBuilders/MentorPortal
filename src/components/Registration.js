import React from 'react';
import ReactDOM from 'react-dom';


class MasterForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {email, username, password} = this.state
        alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep +1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    *button functions
    */

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                Previous
                </button>
            )
        }
        return null;
    }

    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <3) {
            return(
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                Next
                </button>
            )
        }
        return null;
    }


    render() {
        return(
            <React.Fragment>
            <h1>Varun's Wizard Form</h1>
            <p>Step {this.state.currentStep} </p>

            <form onSubmit={this.handleSubmit}>

                <Step1 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    email={this.state.email}
                />

                <Step2 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    username={this.state.username}
                />

                <Step3 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    password={this.state.password}
                />
                {this.previousButton()}
                {this.nextButton()}

            </form>    

            </React.Fragment>
        );
    }


}
/*Step 1*/

function Step1(props) {
    if (props.currentStep !==1) {
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="email">Email adress</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                value={props.email}
                onChange={props.handleChange}
                />
        </div>
    );
}
/*Step 2 */

function Step2(props) {
    if (props.currentStep !==2) {
        return null
    }
    return(
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                value={props.username}
                onChange={props.handleChange}
                />
        </div>
    );
}

/** Step 3*/

function Step3(props) {
    if (props.currentStep !==3) {
        return null
    }
    return(
        <React.Fragment>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                className="form-control"
                id="password"
                name="password"
                type="text"
                placeholder="Enter password"
                value={props.password}
                onChange={props.handleChange}
                />
        </div>
        <button className="btn btn-success btn-block">Sign up</button>
        </React.Fragment>
    );
}
ReactDOM.render(<MasterForm />, document.getElementById('root'))
export default MasterForm;