import './inputText.scss';
import {useState} from "react";

export const InputText = () =>{
    const[val, setVal] = useState('');
    const handleChange = (e)=>{
        setVal(e.target.value);
    }
    return <div className={'container'}>
        <input onChange={handleChange} value={val}/>
        <p>{val}</p>
    </div>
}