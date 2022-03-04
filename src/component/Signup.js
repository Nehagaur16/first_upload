import React, {Component} from 'react';

export default class Signup extends Component{
    constructor(props){
        super (props)
        this.state = { username:'', email: '', password: ''}
    }

    onUserNameChange = (event) => {
        this.setState({ username: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value})
    }

    onSubmitForm = (event) => {
        console.log("username", this.state.username)
        console.log("email", this.state.email)
        console.log("password", this.state.password)
        event.preventDefault()
    }
    render(){
    return (
        <div>
            <div className='signup'>
                <form>
                <div class="row mb-4">
                    <div class="col">
                    <div class="form-outline">
                        <label class="form-label" for="form3Example1">Your Name</label>
                        <input type="text" class="form-control" value={this.state.username} onChange={this.onUserNameChange}/>
                    </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" class="form-control" value={this.state.email} onChange={this.onEmailChange}/>
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4">Password</label>
                    <input type="password" class="form-control" value={this.state.password} onChange={this.onPasswordChange}/>
                </div>

                <button type="submit" class="btn btn-success btn-block mb-4" onClick={this.onSubmitForm}>Sign up</button>
                </form>
            </div>
        </div>
    )
  }
}
