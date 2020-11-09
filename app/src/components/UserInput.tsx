import React, { Component } from 'react';
import { getStar } from '../data/GetStar'

const getUserStar = async (name: string) => { return await getStar(name) }

class UserInput extends Component {
    handleSubmit = (event: { preventDefault: () => any; }) => event.preventDefault()
    state = {
        name: ''
    }
    handleChange = (e: { target: { value: any } }) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Github User Id" onChange={this.handleChange}></input>
                    <button onClick={() => getUserStar(this.state.name).then(star => console.log(star))}>검색</button>
                </form>
            </div>
        )
    }
}

export default UserInput;