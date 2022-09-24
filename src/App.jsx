import React, { useState } from 'react'


export default function App() {

  const [displayValue, setDisplayValue] = useState('')
  const [result, setResult] = useState(0)
  const [accumulator, setAccumulator] = useState(0)
  const [isCalculated, setIsCalculated] = useState(true)

  const Display = (value, result) => {
    return (
      <div style={displayStyle}>
        <span style={operationStyle}>{valor}</span>
        <span style={resultStyle}>{res}</span>
      </div>
    )
  }

  const Button = (label, onClick) => {
    return (
      <button style={buttonStyle} onClick={onClick}>{label}</button>
    )
  }

  // FUNÇÕES
  const addDigitOnDisplay = digit => {
    if ((digit == '+' || digit == '-' || digit == '*' || digit == '/') && isCalculated) {
      console.log('+-*/')
      setIsCalculated(false)
      setDisplayValue(result + digit)
    } else if (isCalculated) {
      setDisplayValue(digit)
      setIsCalculated(false)
    } else {
      const valueDigitOnDisplay = displayValue + digit
      setDisplayValue(valueDigitOnDisplay)
    }
    const clearDisplay = () => {
      setIsCalculated(false)
      setDisplayValue('')
      setResult(0)
      setAccumulator(0)
    }
  }

  // ESTILOS
  const displayStyle = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    window: 260
  }

  const operationStyle = {
    fontSize: 25,
    color: '#fff',
    height: 20,
  }

  const resultStyle = {
    fontSize: 50,
    color: '#fff',
    height: 20,
  }

  const buttonStyle = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff',
    textAlign: 'center',
    outline: 'none'
  }

  return (
    <>
      React ⚛️ + Vite ⚡ + Replit 🌀
    </>
  )
}
