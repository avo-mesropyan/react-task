import './SumItem.scss';
import {useState} from "react";

export const SumItem = ({arr}) =>{

    const[item,setItem]=useState(0);

    const sumVal = () =>{
       let result = item;

       for(let i = 0; i < arr.length; i++){
           result  += arr[i];
       }

       setItem(result);
    }
    return <div className={'container'}>
        <h3>{item}</h3>
        <button onClick={sumVal}>result</button>
    </div>
}