import './TextSize.scss';
import {useState} from "react";

export const TextSize = ({text}) => {

    const [string, setString] = useState(0);



    const checkSize = () => {
        setString(string + 10)
    }


    return <div className={'container'}>
        <p style={{fontSize:`${string}px`}}>{text}</p>
        <button onClick={checkSize}>transform</button>
    </div>
}