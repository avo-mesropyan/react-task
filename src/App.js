import {TextTransform} from "./components/TextTransform/TextTransform";
import {SumNumber} from "./components/SumNumber/SumNumber";
import {TextSize} from "./components/TextSize/TextSize";
import {MaxVal} from "./components/MaxVal/MaxVal";
import {SumItem} from "./components/SumItem/SumItem";
import {CheckNumber} from "./components/checkNumber/checkNumber";
import {EvenSum} from "./components/EvenSum/EvenSum";
import {TextHidden} from "./components/TextHiden/TextHiden";
import {InputText} from "./components/inputText/InputText";
import {Result} from "./components/Result/Result";
import {ForInput} from "./components/ForInput/ForInput";


function App() {
  return (
    <div className="App">
      <TextTransform text={"Hello, World!"}/>
        <SumNumber number_1={5} number_2={6}/>
        <TextSize text={'Lorem Ipsum'}/>
      <MaxVal arr={[1,2,33,5,6,5,344,233,34,8,7878,4,5]}/>
        <SumItem arr={[1,2,33]}/>
        <CheckNumber number={60}></CheckNumber>
        <CheckNumber number={59}></CheckNumber>
        <EvenSum arr={[20,3,10,5]}/>
      <TextHidden/>
     <InputText/>
        <Result/>
        <ForInput/>
    </div>
  );
}

export default App;
