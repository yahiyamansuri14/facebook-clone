import React, { Component } from 'react'
import '../login/login.style.css'
export default class Otp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    setData = ( props ) =>{
        window.location='/Feed'
    }
    
    render() {
        return (
            <>
                <div className="container-fluid otp-container">
                    <div className="container align-middle mt-5 login-container">
                        <div className="row">
                                        <span className="login-text">Pls enter a 6 digit OTP sent to your email...</span>
                            <input
                                type="text"
                                className="form-control mt-2"
                            ></input>
                            <button
                                className="btn btn-primary btn-block mt-3 login-button"
                                onClick={this.setData}
                            ><span className="login-btn-text">SignUp</span></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
