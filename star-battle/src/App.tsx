import React from 'react'
import './App.css'

function App() {
    fetch('https://api.github.com/users/1-exon/repos')
    .then(res => {
        // let stars: number = 0
        // for (let i: number = 0; i < repos.json().length; i++) {
        //     stars += res.json().stargazers_count
        // }
        res.json()
        .then(repos => {
            console.log(repos)
        })
    })
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
                </div>

            </header>
        </div>
    )

}

export default App
