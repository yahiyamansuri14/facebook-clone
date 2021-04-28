import React, { Component } from 'react'
import './post.style.css'
export default class Post extends Component {
    render() {
        return (
            <>
                <div className="container-fluid mt-3 post-container">
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-8 border p-3">
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="input-box mt-3 border border-primary"
                                        placeholder="what's on your mind???"
                                    ></input>
                                  {/*   <textarea
                                        className="input-box mt-3 border border-primary"
                                        placeholder="what's on your mind???"
                                    ></textarea> */}
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button
                                        className="btn btn-success bg-success mt-2"
                                    >Photo/Video</button>
                                </div>
                                <div className="col">
                                    <button
                                        className="btn btn-secondary mt-2 bg-secondary"
                                    >Public</button>
                                </div>
                                <div className="col">
                                    <button
                                        className="btn btn-primary mt-2"
                                    >Post</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </>
        )
    }
}
