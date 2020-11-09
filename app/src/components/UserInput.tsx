import React, { Component } from 'react'
import { getStar as getUserStar } from '../data/GetStar'

class UserInput extends Component {
    public state = { name: '' }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: e.target.value
        })
    }

    public async search() {
        const stars = await getUserStar(this.state.name)
        console.log(stars)
    }

    public render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="Github User Id" onChange={this.handleChange.bind(this)}></input>
                    <button onClick={this.search.bind(this)}>검색</button>
                </form>
            </div>
        )
    }
}

export default UserInput;
