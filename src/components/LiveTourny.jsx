import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GameRound from './GameRound';

function LiveTourny(props) {
  let setup = [];
  for (let i = 0; i < props.players.length; i++) {
    setup.push({'name': props.players[i], 'score': 0});
  }

  const [players, setPlayers] = useState(setup);

  const gameWinners = (winners) => {

    for (let j = 0; j < winners.length; j++) {
      winners[j].score += 1;
      for (let k = 0; k < players.length; k++) {
        if (players[k].name === winners[j].name) {
          setPlayers(existingItems => {
            return [
              ...existingItems.slice(0, k),
              winners[j],
              ...existingItems.slice(k + 1),
            ]
          })
        }
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          { players.map((player, i) => <Row key={i}><Col>{player.name}</Col><Col>{player.score}</Col></Row>) }
        </Col>
        <Col>
          <GameRound players={players} gameWinners={gameWinners}/>
        </Col>
      </Row>
    </Container>
  )
}

export default LiveTourny