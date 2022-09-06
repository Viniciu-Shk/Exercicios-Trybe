import React, { useEffect, useState } from "react";

export default function MeuComponente() {
  const [seconds, setSeconds] = useState(0);
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [])
  useEffect(() => {
    console.log(seconds);
    if (seconds % 10 === 0) {
      setNumber(Math.ceil(Math.random() * 100))
    }
    if (number % 3 === 0 || number % 5 === 0) {
      setMessage('Acertou!');
      setTimeout(() => setMessage(''), 4000);
    }
  }, [seconds])

  return(
    <h1>{ message }</h1>
  );
}