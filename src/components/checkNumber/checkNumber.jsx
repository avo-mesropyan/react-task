import './checkNumber.scss';
import {useState} from "react";

export const CheckNumber = ({number}) =>{
    const[odd, setOdd] = useState(true)
    const[result, setResult] = useState(0)

    const  foo = () =>{
        if(number%2===0){
            setOdd(true)
        }else{
            setOdd(false)
        }
        setResult(number);
    }
    return <div className={'container'}>
        <h3 className={`${odd? 'red': 'green'}`}>{result}</h3>
        <button onClick={foo}>Click</button>
    </div>
}