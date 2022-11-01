import React, {useState} from 'react';
import cl from './Counter.module.css';
import { BsPlusSquare } from 'react-icons/bs';


export default function Counter() {
    const [score, setScore] = useState(0);

    const [plus, setPlus] = useState('');

    const counterHandler = (event) => {
        setPlus(event.target.value);
        console.log(event.target.value);
    }

    const totalScore = (event) => {
        event.preventDefault();

        if ((+score + (+plus)) % 100 === 0) {
            setScore(0);
            
            setPlus('');
        }
        else {
            setScore(+score + (+plus));
            setPlus('');

        }

        



        
    }
  return (
         <form onSubmit={totalScore} className={cl.counter}>
    <div className={cl.score}>{score}</div>
    <input type='number' value={plus} onChange={counterHandler} size='3'></input>
    <button className={cl.btn}><BsPlusSquare size={`2rem`} color={`gray`}/></button>
    </form>
 
  )
}
