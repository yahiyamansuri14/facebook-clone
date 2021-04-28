import Post from '../components/Post/Post'
import React, { Component } from 'react'
import NavBar from '../components/NavigationBar/NavBar'
import './feed.style.css'
import PostShow from '../components/PostShow/PostShow'
export default class Feed extends Component {
    
    
    render() {
        return (
            <>
                
                    <NavBar></NavBar>
                
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        
                        <Post></Post>
                        <PostShow></PostShow>
                    </div>
                    <div className="col-3"></div>
                </div>
            </>
        )
    }
}
