import React, { Component } from 'react';
import { getStar } from '../data/GetStar'

const getUserStar = async (name: string) => { return await getStar(name) }

class UserInput extends Component {
    handleSubmit = (event: { preventDefault: () => any; }) => event.preventDefault()
    state = {
        first: '',
        second: ''
    }
    handleFirstChange = (e: any) => this.setState({first: e.target.value})
    handleSecondChange = (e: any) => this.setState({second: e.target.value})

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Github User Id" onChange={this.handleFirstChange}></input>
                    <input placeholder="Github User Id" onChange={this.handleSecondChange}></input>
                    <button onClick={() => {
                        getUserStar(this.state.first).then(star => console.log('1: ' + star))
                        getUserStar(this.state.second).then(star => console.log('2: ' + star))
                        }}>검색</button>
                </form>
            </div>
        )
    }
}

export default UserInput;