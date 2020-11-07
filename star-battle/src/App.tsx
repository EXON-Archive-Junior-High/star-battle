import React from 'react'
import './App.css'
import superagent from 'superagent'

async function App() {
    try {
        const repos = superagent.get('https://api.github.com/users/1-exon/repos')
        .end((err, res) => {
            alert(res)
        })
    } catch (err) {
        console.log(err)
    }
    // let stars: number = 0
    // for (let i: number = 0; i < repos.length; i++) {
    //     stars += repos[i].stargazers_count
    // }
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
