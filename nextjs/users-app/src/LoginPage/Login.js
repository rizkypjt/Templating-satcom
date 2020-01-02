import React, { Component } from 'react';
import login from '../Api/Mock';
// import { Redirect } from 'react-router-dom';

// import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _onChangeEmail(e) {
        e.preventDefault();
        this.setState({ email: e.target.value })

    }

    _onChangePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.email);
        var res = await login(this.state.email, this.state.password);
        console.log(res)

        if (res) {
            this.props.history.push('/users');
            // alert('Succes')
        } else {
            alert("Login Gagal");
        }
    }


    render() {
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                    <label htmlFor="inputEmail">Email address</label>
                                        <input
                                            value={this.state.email}
                                            onChange={this._onChangeEmail}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter email" />
                                    </div>

                                    <div className="form-label-group">
                                    <label htmlFor="inputEmail">Password</label>
                                        <input
                                            value={this.state.password}
                                            onChange={this._onChangePassword}
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password" />
                                    </div>
                                    &nbsp;
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.handleSubmit}>Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
