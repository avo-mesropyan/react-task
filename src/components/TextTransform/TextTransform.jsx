import './TextTransform.scss';
import {useState} from "react";

export const TextTransform = ({text}) => {
    const [toUppercase, setToUppercase] = useState(false);
    const hendleClick = () => {
        setToUppercase(!toUppercase);
    }
    return <div className={'container'}>
        <div className={'text-block'}>
            {/*<p className={`${toUppercase? 'toUppercase':''}`}>{toUppercase?text.toUpperCase(): text.toLowerCase()}</p>*/}
            <p className={`${toUppercase ? 'toUppercase' : 'toLowercase'}`}>{text}</p>
            <button className={'button'} onClick={hendleClick}>click me</button>
        </div>
    </div>
}
