import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';

function GameRound(props) {
  const [playing, setPlaying] = useState(false);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  const generateTeams = () => {
    let m = props.players.length, arr = props.players, t, i;
    while(m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    const half = Math.ceil(props.players.length / 2);
    setTeamOne(arr.slice(0, half));
    setTeamTwo(arr.slice(-half));
    setPlaying(true);
  };

  const teamWins = (boo) => {
    setPlaying(false);

    if (boo) {
      props.gameWinners(teamOne);
    } else {
      props.gameWinners(teamTwo);
    }
  };

  if (playing) {
    return (
      <Row>
        <Col>
          { teamOne.map((player, i) => <p key={i}>{player.name}</p>) }
          <Button onClick={() => teamWins(true)}>Team Wins</Button>
        </Col>
        <Col>
          { teamTwo.map((player, i) => <p key={i}>{player.name}</p>) }
          <Button onClick={() => teamWins(false)}>Team Wins</Button>
        </Col>
      </Row>
    )
  } else {
    return <Button onClick={generateTeams}>Generate Teams</Button>
  }
}

export default GameRound