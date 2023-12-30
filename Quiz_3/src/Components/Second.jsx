import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { ScoreContext } from './Context/Score';
import Third from './Third';

const Second = () => {
  const { score, setScore } = useContext(ScoreContext);
  const [n, setN] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const footballQuestions = [
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['France', 'Brazil', 'Germany', 'Argentina'],
      correctAnswer: 'France',
    },
    {
      question: 'Who is the all-time top scorer in the UEFA Champions League?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Raul', 'Robert Lewandowski'],
      correctAnswer: 'Cristiano Ronaldo',
    },
    
   
    {
      question: 'Who won the Ballon d\'Or in 2017?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Robert Lewandowski', 'Virgil van Dijk'],
      correctAnswer: "Cristiano Ronaldo",
    },
    {
      question: 'Which club did Zinedine Zidane play for in the majority of his career?',
      options: ['Real Madrid', 'AC Milan', 'Manchester United', 'Juventus'],
      correctAnswer: 'Juventus',
    },
    {
      question: 'In which year did the Premier League begin?',
      options: ['1988', '1992', '1996', '2000'],
      correctAnswer: '1992',
    }
  ];

  const quizQuestions = footballQuestions[n];

  const progress = (selected) => {
    const answer = quizQuestions.correctAnswer;
    setSelectedOption(selected);
    
    if (selected === answer) {
      setScore((prevScore) => prevScore + 1)
      window.alert("You chose the right answer!!!");
    }
    else{
      window.alert("You chose the wrong answer")
    }

    setSelectedOption(null);
    setN((prev) => prev + 1);
   
  };

  return (
    <>{n===5 ? (<Third/>):(
      <div className='container'>
        <p>{quizQuestions.question}</p>
        <div className='grid'>
          {quizQuestions.options.map((option, i) => (
            <button
              key={i}
              className={`options ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => progress(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className='btns'>
          <button className='btn' onClick={() => setN((prev) => Math.max(prev - 1, 0))}>
            P R E V I O U S
          </button>
          <button className='btn' onClick={() => setN((prev) => (prev < 9 ? prev + 1 : 0))}>
            N E X T
          </button>
          <button className='btn' onClick={() => window.confirm('Are you sure you want to quit?')}>
            Q U I T
          </button>
          <Link to='/3'>
            <button className='btn'>F I N I S H</button>
          </Link>
        </div>
      </div>
)}</>
  );
};

export default Second;