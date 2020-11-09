import React from 'react'
import './css/App.css'

function App() {
    let stars: number = 0
    fetch('https://api.github.com/users/1-exon/repos')
    .then(res => {
        res.json()
        .then(repos => {
            for (let i: number = 0; i < repos.length; i++) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                stars += repos[i].stargazers_count
            }
            console.log(stars)
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
