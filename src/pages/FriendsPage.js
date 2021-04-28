import React, { Component } from 'react'
import FreindUpperProfile from '../components/FriendRequest/FreindUpperProfile'
import PeopleYouMayKnow from '../components/FriendRequest/PeopleYouMayKnow'
import NavBar from '../components/NavigationBar/NavBar'
export default class FriendsPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar></NavBar>
                <div className="row mt-3">
                    <div className="col-3">
                        <h4><b>Friends</b></h4>
                        <FreindUpperProfile></FreindUpperProfile>
                        <FreindUpperProfile></FreindUpperProfile>
                        <FreindUpperProfile></FreindUpperProfile>
                        <b  className="mb-2">People you may know</b>
                        <PeopleYouMayKnow></PeopleYouMayKnow>
                        <PeopleYouMayKnow></PeopleYouMayKnow>
                        <PeopleYouMayKnow></PeopleYouMayKnow>
                        <PeopleYouMayKnow></PeopleYouMayKnow>
                        <PeopleYouMayKnow></PeopleYouMayKnow>
                        <PeopleYouMayKnow></PeopleYouMayKnow>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        )
    }
}
