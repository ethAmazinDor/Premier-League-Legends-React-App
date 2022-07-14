import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const Players = () => {
    const url = 'https://premier-legends-api.herokuapp.com/api/players'

    const [index, setIndex] = useState(0)
    const [players, setPlayers] = useState([])
    const { name, club, position, age, birthLocation, trophiesWon, desc, goals, assists, image } = players[index]


    const getPlayers = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPlayers(data)
    }

    useEffect(() => {
        getPlayers()
    }, [])



    const checkNumber = (number) => {
        if (number > players.length - 1) {
            return 0
        }

        if (number < 0) {
            return players.length - 1
        }

        return number
    }

    const nextPerson = () => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex - 1
            return checkNumber(newIndex)

        })
    }



    return (
        <article className="player">
            <div className="img-container">
                <img className="person-img" src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <h4>Position: {position}</h4>
            <h4>Club: {club}</h4>
            <h4>Birth: {birthLocation}</h4>
            <h4>Age: {age}</h4>
            <h4>Trophies Won: {trophiesWon}</h4>
            <h4>Goals: {goals}</h4>
            <h4>Assists: {assists}</h4>
            <p className="info">{desc}</p>
            <div className="btn-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" >
                Surprise me
        </button>
        </article>
    )
}

export default Players
