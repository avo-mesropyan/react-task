import './EvenSum.scss';
import {useState} from "react";

export const EvenSum = ({arr}) =>{

    const [result, setResult] = useState(0);

    const boo = () =>{
        let sum = result;
        for (let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                sum += arr[i];
            }
        }
        setResult(sum);
    }


    return <div className={'container'}>
       <h1>{result}</h1>
       <button onClick={boo}>click even</button>
    </div>
}