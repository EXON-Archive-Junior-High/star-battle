import React, { Component } from 'react'
import { getStar as getUserStar } from '../data/GetStar'
import { user1, user2 } from '../models/users'

const Selector = (param: string) => { return document.querySelector(param) }

class UserInput extends Component {
    public state = { first: '', second: '' }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    public handleChangeFirst(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            first: e.target.value
        })
    }

    public handleChangeSecond(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            second: e.target.value
        })
    }

    public async search() {
        user1.Reset(this.state.first, await getUserStar(this.state.first))
        user2.Reset(this.state.second, await getUserStar(this.state.second))
        Selector('#star1')!.innerHTML = user1.stars?.toString()
        Selector('#star2')!.innerHTML = user2.stars?.toString()
        Selector('#user1')!.innerHTML = user1.name
        Selector('#user2')!.innerHTML = user2.name
    }

    public render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="Github Id" onChange={this.handleChangeFirst.bind(this)}></input>
                    <input placeholder="Github Id" onChange={this.handleChangeSecond.bind(this)}></input>
                    <button onClick={this.search.bind(this)}>검색</button>
                </form>
                <br/>
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
                                <td>followers</td><p id="followers2"></p><br/>
                                <td>commits<p id="commits2"></p></td><br/>
                            </th>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default UserInput
