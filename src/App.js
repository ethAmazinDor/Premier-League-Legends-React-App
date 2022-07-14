import React from 'react'
import Players from './components/Players'

const App = () => {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Premier League Legends</h2>
                    <div className="underline"></div>
                </div>
                <Players />
            </section>
        </main>
    )
}

export default App
