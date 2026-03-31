//import styles from './Button.module.css'

export default function Button(value, equation, setEquation){

    console.log(equation);

    return (
        <button onClick={() => setEquation([...equation, value])}>
            { value }
        </button>
    )
}