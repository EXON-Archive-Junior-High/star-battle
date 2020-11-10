import React from 'react'
import './css/App.css'
import UserInput from './components/Main'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="head">
                    <h1>Github Star Battle</h1>
                    <p>깃허브 스타 대결 사이트!</p>
                </div>
                <UserInput />
            </header>
        </div>
    )
}

export default App
