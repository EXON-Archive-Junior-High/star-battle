import React from 'react'
import './App.css'
import request from 'superagent'

function App() {
    alert(request.get('https://api.github.com/users/1-exon/repos').toString())
    const repos = JSON.parse(request.get('https://api.github.com/users/1-exon/repos').toString())
    let stars: number = 0
    for (let i: number = 0; i < repos.length; i++) {
        stars += repos[i].stargazers_count
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className="head">
                    <h1>Github Star Battle</h1>
                    <p>깃허브 스타 대결 사이트!</p>
                </div>
                <div className="main">
                    <input id="users"></input>
                    <button>검색</button>
                    <h1>{stars}</h1>
                </div>

            </header>
        </div>
    )
}

export default App
