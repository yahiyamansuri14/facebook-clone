import React, { Component } from 'react'
import './login.style.css'

import axios from 'axios'
export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailOrMobile:"",
            pwd:""
        }
    }
    login = () =>{
        let {emailOrMobile, pwd} = this.state
        /*axios.post(`${config.API}/logintest`)*/
        let loginURL = `http://localhost:8080/user/logintest?email=${emailOrMobile}&&password=${pwd}`
        axios.post(loginURL)
                .then( async (res) =>{
                    let data = res.data
                    console.log(data)
                    if (data.status == "OK" ){
                        await localStorage.setItem("loginTkn",data.token)
                        console.log(localStorage.getItem("loginTkn"))
                    }
                })
                .catch( err =>{
                    console.log(err)
                })
    }
    testLogin = () =>{
        let {emailOrMobile, pwd } = this.state
        axios.get('http://localhost:8080/user/testApi',{ emailOrMobile, pwd })
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
    }
    render() {
        return (
            <div className="container align-middle mt-5 login-container">
                <p className="login-text">We help you to connect and share with people in your life...</p>
                <div className="row form-group">
                    <input
                        type="text"
                        placeholder="Email address or Mobile no"
                        className="form-control mt-3"
                        value={this.state.emailOrMobile}
                        onChange={
                            e=>{this.setState({emailOrMobile:e.target.value})}
                        }
                    ></input>
                    <input
                        type="password"
                        placeholder="password"
                        className="form-control mt-3"
                        value={this.state.pwd}
                        onChange={
                            e=>{this.setState({pwd:e.target.value})}
                        }
                    ></input>
                    <button
                        className="btn btn-primary btn-block mt-3 login-button"
                        onClick={this.testLogin}
                    ><span className="login-btn-text">Log In</span></button>
                    <span className="text-right mt-3 text-primary">forget password?</span>
                </div>
            </div>
        )
    }
}
