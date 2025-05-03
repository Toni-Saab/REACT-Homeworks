import React, { useState } from 'react';
import './MathGame.css';

const MathGame = () => {
  const [a, setA] = useState(Math.floor(Math.random() * 100) + 1);
  const [b, setB] = useState(Math.floor(Math.random() * 100) + 1);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = a + b;
    if (parseInt(answer) === correctAnswer) {
      setScore(prevScore => prevScore + 1);
      setMessage('Correct! +1 Point');
    } else {
      setScore(prevScore => prevScore - 1);
      setMessage(`Wrong! The answer is ${correctAnswer}. -1 Point`);
    }
    setA(Math.floor(Math.random() * 100) + 1);
    setB(Math.floor(Math.random() * 100) + 1);
    setAnswer('');
  };

  return (
    <div className="math-challenge">
      <div className="problem-block">
        <span className="number-a">{a}</span>
        <span className="operator">+</span>
        <span className="number-b">{b}</span>
        <span className="equal">=</span>
      </div>
      <form className="answer-form" onSubmit={handleSubmit}>
        <input
          type="number"
          className="answer-input"
          value={answer}
          onChange={handleInputChange}
          placeholder="Your Answer"
        />
        <button type="submit" className="submit-button">Check</button>
      </form>
      <div className="score-board">
        Score: <span className="score-value">{score}</span>
      </div>
      {message && <p className="result-message">{message}</p>}
    </div>
  );
};

export default MathGame;