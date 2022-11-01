import React, {useState} from 'react'

export default function Module() {
    const [score, setScore] = useState('');

    const scoreHandler = (event) => {
        setScore(event.target.value);
    }


  return (
    <div>
        <input type='number' value={score} onChange={scoreHandler}></input>
    </div>
  )
}
