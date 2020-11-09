import React from 'react'
import './css/App.css'

import { getStar } from './data/GetStar'

const getUserStar = async () => { return await getStar() }

function App() {

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
