import './MaxVal.scss';
import {useState} from "react";

export const MaxVal = ({arr}) => {
    const [maxVal, setMaxVal] = useState(arr[0]);


    const maxItem = () => {
        let maxNumber = maxVal;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxNumber) {
                maxNumber = arr[i];
            }
        }
        setMaxVal(maxNumber);
    }


    return <div className={'container'}>
        <h3>{maxVal}</h3>
        <button onClick={maxItem}>click</button>
    </div>
}