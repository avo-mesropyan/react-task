import './SumNumber.scss';
import {useState} from "react";

export const SumNumber = ({number_1, number_2}) => {

    const[numbers, setNumbers] = useState(0);

    const sum = () => {
        setNumbers(number_1 + number_2);
    }


    return <div className={'container'}>
        <p>{number_1} + {number_2} = {numbers} </p>
        <button onClick={sum}>result</button>
    </div>
}