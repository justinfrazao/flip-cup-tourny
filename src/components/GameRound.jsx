import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';

function GameRound(props) {
  const [playing, setPlaying] = useState(false);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  const generateTeams = () => {
    let i = 1, arr = [...props.players];
    const tempTeam1 = [];
    const tempTeam2 = [];

    while (arr.length > 0) {
      const random = Math.floor(Math.random() * arr.length);
      i % 2 === 0 ? tempTeam1.push(arr[random]) : tempTeam2.push(arr[random]);
      arr.splice(random, 1);
      i++;
    }

    setTeamOne(tempTeam1);
    setTeamTwo(tempTeam2);
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