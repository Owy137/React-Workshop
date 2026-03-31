import { useState, useCallback, useEffect } from 'react'
import Button from './Button'
import Screen from './Screen'

function App() {
  const [equation, setEquation] = useState([]);
  const handleClick = useCallback(
    (value) => {
      console.log("Clicked: ", value);
      if (value === 'C') {
        setEquation([]);
      } else if (value === '=') {
        setEquation((prev) => {
          const result = calculatePostFix(inToPostfix(prev));
          console.log("Calculating: ", result);
          return [result];
        });
      } else {
        setEquation((prev) => [...prev, value]);
      }
    },[]
  );
  
  return (
    <div className="App">
      <Screen equation={equation} />
      <div className="button-grid">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="C" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
      </div>
    </div>
  )
}

export default App
