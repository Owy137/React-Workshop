import { useState } from 'react'
import Button from './Button'
import Screen from './Screen'

function App() {
  const [equation, setEquation] = useState(["1", "+", "2"])
  console.log(equation);
  return (
    <>
      <Button value="1" equation={equation} setEquation={setEquation} />
    </>
  )
}

export default App
