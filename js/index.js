import React from "react";
import { createRoot } from "react-dom/client";
import { DigitalRain } from "./DigitalRain";

const root = createRoot(document.getElementById("root"));



const App = () => {
    const [version, setVersion] = React.useState('3d')
    const [number, setNumber] = React.useState(0)
    const onButtonClick = () => {
        setVersion(s => s === '3d' ? '' : '3d');
    }
    const newNum = () => setNumber(n => n + 1);
    console.log('version', version);
    console.log('num', number);

    return (
        <div>
        <h1>Digital Rain</h1>
        <button onClick={onButtonClick}>change version</button>
        <button onClick={newNum}>change number</button>
        <DigitalRain version={version}/>
        </div>
    );
}
root.render(<App />);
