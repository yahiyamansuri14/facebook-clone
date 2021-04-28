import React, { Component } from 'react'
import './signup.style.css'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Otp from './Otp'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
             user:{},
            firstName: "",
            lastName: "",
            emailOrMobile: "",
            pwd: "",
            date: "06/06/1998",
            gender: "",
            isClicked: false
        }
    }

    signup = () => {
        let { firstName, lastName, emailOrMobile, pwd, date, gender } = this.state
        let user = { firstName, lastName, emailOrMobile, pwd, date, gender } 
       /*  const DataURL = `http://localhost:8080/testsignup?firstName=${ firstName }&& 
                            emailOrMobile=${emailOrMobile}&& 
                            pwd=${ pwd }&&
                            date=${date}&&
                            gender=${gender}
                            ` */
      this.props.value(user)
          
    }

    render() {
        return (
            <>
                <div className="container align-middle mt-5 signup-container">
                    <p className="login-text">SignUp its free</p>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="first name"
                                className="form-control mt-3"
                                value={this.state.firstName}
                                onChange={e => { this.setState({ firstName: e.target.value }) }}
                            ></input>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                placeholder="last name"
                                className="form-control mt-3"
                                value={this.state.lastName}
                                onChange={e => { this.setState({ lastName: e.target.value }) }}
                            ></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="email address or mobile no"
                                className="form-control mt-3"
                                value={this.state.emailOrMobile}
                                onChange={e => { this.setState({ emailOrMobile: e.target.value }) }}
                            ></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="password"
                                placeholder="new password"
                                className="form-control mt-3"
                                value={this.state.pwd}
                                onChange={e => { this.setState({ pwd: e.target.value }) }}
                            ></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="date"
                                clasName="form-control mt-3 "
                                value={this.state.date}
                                onChange={e => { this.setState({ date: e.target.value }) }}
                            ></input>
                        </div>
                        <div className="col">
                            <select
                                className="form-control mt-3"
                                value={this.state.gender}
                                onChange={e => { this.setState({ gender: e.target.value }) }}
                            >
                                <option value="female">FeMale</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <Link to="/otp" data="abc">
                    
                    <button
                        className="btn btn-primary btn-block mt-3 login-button"
                        onClick={this.signup}
                    ><span className="login-btn-text">Sign Up</span></button>
                    </Link>
                    
                    
                </div>
            </>
        )
    }
}
