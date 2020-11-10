import React, { Component } from 'react'

class UserContent extends Component {
    public render() {
        return (
                <div className="users">
                    <table>
                        <thead>
                            <tr>
                                <th id="user1"></th>
                                <th id="user2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <th>
                                <td>star<p id="star1"></p></td><br/>
                                <td>followers<p id="followers1"></p></td><br/>
                                <td>commits<p id="commits1"></p></td><br/>
                            </th>
                            <th>
                                <td>star<p id="star2"></p></td><br/>
                                <td>followers<p id="followers2"></p></td><br/>
                                <td>commits<p id="commits2"></p></td><br/>
                            </th>
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default UserContent