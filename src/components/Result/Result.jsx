import './Result.scss';
import {useState} from "react";

export const Result = () =>{
    const [item_1, setItem1] = useState(0);
    const [item_2, setItem2] = useState(0);
    const [result, setResult] = useState(0);

    const ItemSum = () =>{
        setResult(+item_1 + +item_2);
    }


    return <div className={'container'}>
     <input type={'number'} value={item_1} onChange={(e) =>{
         setItem1(e.target.value)
     }}/>
     <input type={'number'} value={item_2}  onChange={(e) =>{
         setItem2(e.target.value)
     }}/>

     <button onClick={ItemSum}>click</button>
     <h1>{result}</h1>
    </div>
}