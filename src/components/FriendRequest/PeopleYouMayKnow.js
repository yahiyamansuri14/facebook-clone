import React, { Component } from 'react'

export default class PeopleYouMayKnow extends Component {
    render() {
        return (
            <div className="container-fluid border mt-2">
                <div className="d-flex flex-row">
                    <div>
                        <img
                            alt="monster"
                            src="https://robohash.org/2?set=set2&size=50x50"
                            className="rounded-circle"
                        ></img>
                    </div>
                    <div>
                    <span className="text-dark ml-3"><b>yahiya mansuri</b></span><br></br>
                    <span className="text-dark ml-3">2 mututal friends</span>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <button
                        className="btn btn-primary p-1 ml-5"
                    >Add a Friend</button>
                    <button
                        className="btn btn-secondary p-1 ml-3"
                    >Delete</button>
                    </div>
            </div>
        )
    }
}
