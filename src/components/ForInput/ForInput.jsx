import './ForInput.scss';
import {useState} from "react";

export const ForInput = () => {
    const [val_1, setVal_1] = useState(0);
    const [val_2, setVal_2] = useState(0);
    const [result, setResult] = useState(0);
    const [isError, setIsError] = useState(false);

    const sum = () => {
        if (val_2 > val_1) {
            let answer = 0;
            for (let i = val_1 + 1; i < val_2; i++) {
                answer += i;
            }
            setIsError(false)
            setResult(answer);
        } else {
            setIsError(true)
        }
    }


    return <div className={'container'}>
        <input className={isError ? 'input-error' : ''} type={'number'} value={val_1} onChange={(e) => {
            setVal_1(+e.target.value)
        }}/>
        <input className={isError ? 'input-error' : ''} type={'number'} value={val_2} onChange={(e) => {
            setVal_2(+e.target.value)
        }}/>
        <button onClick={sum}>click me</button>
        <p>{result}</p>
        {isError ? <p>unex xndir</p> : null}

    </div>
}