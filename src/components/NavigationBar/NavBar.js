import React, { Component } from 'react'
import './navbar.style.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import FacebookIcon from '@material-ui/icons/Facebook'
export default class NavBar extends Component {
  
    render() {
       
        return (
            <>
                <div className="container-fluid nav-container">
                    <div className="row">
                        <div className="col-3">
                        <nav className="navbar navbar-expand-md">
                                <ul className="navbar-nav">
                                    <li className="nav-item" style={{'margin-left':'10px'}}>
                                        <FacebookIcon
                                            style={{'color':'#0275d8'}}
                                            fontSize="large"
                                        ></FacebookIcon>
                                        
                                    </li>
                                    <li className="nav-item"  style={{'margin-left':'10px'}}>
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search"
                                        ></input>                                        
                                    </li>
                                </ul>
                        </nav>
                        </div>
                        <div className="col-6">
                            <nav className="navbar navbar-expand-md">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <HomeIcon
                                            style={{'color':'#0275d8'}}
                                            fontSize="large"
                                            onClick={()=>{window.location="/feed"}}
                                        ></HomeIcon>
                                        {/* <Icon color="primary" style={{ fontSize: 40 }}>Home</Icon> */}
                                    </li>
                                    <li className="nav-item">
                                        <PersonIcon
                                            style={{'color':'#0275d8'}}
                                            fontSize="large"
                                            onClick={()=>{window.location="/friends"}}
                                        ></PersonIcon>
                                    </li>
                                    <li className="nav-item">
                                    <VideocamIcon
                                        style={{'color':'#0275d8'}}
                                        fontSize="large"
                                    ></VideocamIcon>
                                    </li>
                                    <li className="nav-item">
                                        <NotificationsNoneIcon
                                            style={{'color':'#0275d8'}}
                                            fontSize="large"
                                        ></NotificationsNoneIcon>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-3">
                        <nav className="navbar navbar-expand-md">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <AccountCircleIcon
                                    style={{'color':'#0275d8'}}
                                    fontSize="large"
                                ></AccountCircleIcon><span>username</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
