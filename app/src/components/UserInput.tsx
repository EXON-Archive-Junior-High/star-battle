import React, { Component } from 'react'
import { getStar as getUserStar } from '../data/GetStar'

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
        const stars1 = await getUserStar(this.state.first)
        const stars2 = await getUserStar(this.state.second)
        console.log('1:', stars1)
        console.log('2:', stars2)
    }

    public render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="Github User Id" onChange={this.handleChangeFirst.bind(this)}></input>
                    <input placeholder="Github User Id" onChange={this.handleChangeSecond.bind(this)}></input>
                    <button onClick={this.search.bind(this)}>검색</button>
                </form>
            </div>
        )
    }
}

export default UserInput;
