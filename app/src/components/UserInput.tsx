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
        console.log('1:', user1.stars)
        console.log('2:', user2.stars)
    }

    public render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="Github Id" onChange={this.handleChangeFirst.bind(this)}></input>
                    <input placeholder="Github Id" onChange={this.handleChangeSecond.bind(this)}></input>
                    <button onClick={this.search.bind(this)}>검색</button>
                    <h1>{user1.stars}</h1>
                    <h1>{user2.stars}</h1>
                </form>

            </div>
        )
    }
}

export default UserInput
