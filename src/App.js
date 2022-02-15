import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import LiveTourny from './components/LiveTourny';
import './App.css';

function App() {
  const [start, setStart] = useState(false);
  const [players, setPlayers] = useState([]);
  const playerRef = useRef();

  useEffect(() => {
    playerRef.current.value = '';
  }, [players]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers(oldPlayers => [...oldPlayers, playerRef.current.value]);
  };

  const beginTourny = () => {
    setStart(true);
  };

  if (start) {
    return <LiveTourny players={players}/>
  } else {
    return (
      <div className="App d-flex flex-column align-items-center">
        <div className="App-header">
          <h1 className="text-center mb-4">FLIP CUP</h1>
        </div>
        <div className="App-body w-100" style={{ maxWidth: '400px'}} >
          <h2 className="text-center mb-4">Enter Your Champions</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="text" className="mb-2">
              <Form.Control type="text" ref={playerRef} required></Form.Control>
            </Form.Group>
            <Button className="w-100 mb-3" type="submit">Sign Up</Button>
          </Form>
          { players.map((player, i) => <p key={i} className="player-name text-center">{player}</p>) }
          <Button className="w-100" onClick={beginTourny}>Start Tournament</Button>
        </div>
      </div>
    );
  }
}

export default App;