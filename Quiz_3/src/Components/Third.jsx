import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ScoreContext } from './Context/Score';

const Third = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh', justifyContent: 'center' }}>
      <div className='resultPage' style={{ backgroundColor: 'white', color: 'black', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Result</h1>
        <div className='dis' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h3 style={{ margin: '20px 0px' }}>You need more practice</h3>
          <h2>Your score is {score} out of 5</h2>
          <div className='stats' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', rowGap: '5vh', position: 'relative', marginBottom: '10vh', marginTop: '10vh', width: '120%', left: '16vh' }}>
            <p>Total number of questions</p>
            <p>5</p>
            <p>Number of attempted questions</p>
            <p>9</p>
            <p>Number of correct answers</p>
            <p>{score}</p>
            <p>Number of wrong answers</p>
            <p>{5 - score}</p>
          </div>
        </div>
        <div className='decide' style={{ marginBottom: '20px' }}>
          <button style={{ marginRight: '30px' }}>T R Y A G A I N</button>
          <Link to='/'>
            <button>TO H O M E</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Third;