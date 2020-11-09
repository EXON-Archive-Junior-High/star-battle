import React, { Component } from 'react'
import { getStar as getUserStar } from '../data/GetStar'
import { user1, user2 } from '../models/users'

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
        user1.stars = await getUserStar(this.state.first)
        user2.stars = await getUserStar(this.state.second)
        console.log('1:', user1.stars);
        console.log('2:', user2.stars);
        document.querySelector('#star1')!.innerHTML = user1.stars?.toString()
        document.querySelector('#star2')!.innerHTML = user2.stars?.toString()
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
                <div className="cards">
                    <table>
                        <thead>
                            <tr>
                                <th>user</th>
                                <th>user</th>
                            </tr>
                        </thead>
                        <tbody>
                            <th>
                                <td>star</td>
                                <br/>
                                <td>followers</td>
                                <br/>
                                <td>commits</td>
                                <br/>
                            </th>
                            <th>
                                <td>star</td>
                                <br/>
                                <td>followers</td>
                                <br/>
                                <td>commits</td>
                                <br/>
                            </th>
                        </tbody>
                    </table>
                    <h1 id="star1">1</h1>
                    <h1 id="star2">2</h1>
                </div>

            </div>
        )
    }
}

export default UserInput
