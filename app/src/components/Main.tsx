import React, { Component } from 'react'
import { getStar as getUserStar } from '../data/GetStar'
import { getFollowers as getUserFollowers } from '../data/GetFollowers'
import { user1, user2 } from '../models/users'
import UserContent from './UserContent'

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
        user1.Reset(this.state.first, await getUserStar(this.state.first), await getUserFollowers(this.state.first))
        user2.Reset(this.state.second, await getUserStar(this.state.second), await getUserFollowers(this.state.second))
        Selector('#user1')!.innerHTML = user1.name
        Selector('#user2')!.innerHTML = user2.name
        Selector('#star1')!.innerHTML = user1.stars?.toString()
        Selector('#star2')!.innerHTML = user2.stars?.toString()
        Selector('#followers1')!.innerHTML = user1.followers?.toString()
        Selector('#followers2')!.innerHTML = user2.followers?.toString()
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
                <UserContent />

            </div>
        )
    }
}

export default UserInput
