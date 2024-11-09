import './TextHiden.scss';
import {useState} from "react";

export const TextHidden = () =>{
    const [hidden, setHidden] = useState(true);

    const update = () =>{
        setHidden(!hidden);
    }

    return <div className={'container'}>
        {hidden ? <p>Hello Avo</p> : null}
        <button onClick={update}>Update</button>
    </div>
}