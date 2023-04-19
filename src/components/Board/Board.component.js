import React, { useState, useEffect, useCallback } from 'react';
import Cell from '../Cell/Cell.component';
import './Board.scss';
import '../Image/ImageContainer.scss';
import { getPlayer, getSnakes, getLadder } from '../../utils/util';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { player } from '../../utils/util';
import Mockdata from '../.././Mock/Newquestion.json';
import startCanvas from "../../canvas";

toast.configure();

const Board = () => {
  const [gameData, setGameData] = useState({
    diceNumber: 1,
    player: player,
    snakes: getSnakes(),
    ladders: getLadder(),
    gameover: false,
    start: false,
  });

  const [boardHtml, setBoardHtml] = useState([]);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [answer, setAnswer] = useState('');
  const [tileType, setTileType] = useState('');
  const [disable, setDisable] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  useEffect(() => {
    if (gameData.gameover) {
      startCanvas()
    }
  }, [gameData.gameover])


  // Resetting the Game
  const resetBtn = useCallback(() => {
    let player = gameData.player;
    player.status = 1;

    setGameData((state) => {
      return {
        ...state,
        start: true,
        gameover: false,
        player: player,
      };
    });
  }, []);

  // Snake check
  const checkSnake = useCallback(
    (i) => {
      const snake = gameData.snakes.slice();
      let found = snake.find((k, j) => {
        if (k.head === i) {
          return k;
        }
        return undefined;
      });
      return found;
    },
    [gameData.snakes]
  );

  // Ladder check
  const checkLadder = useCallback(
    (i) => {
      const ladder = gameData.ladders.slice();
      let found = ladder.find((k, j) => {
        if (k.from === i) {
          return k;
        }
        return undefined;
      });
      return found;
    },
    [gameData.ladders]
  );

  // Creating Elements on the Board
  const createBoard = (init, cells) => {
    const boardHtml = [];

    for (let i = init; i <= cells; i++) {
      let playerFound =
        gameData.player.status === i ? gameData.player : undefined;
      let snakeFound = checkSnake(i);
      let ladderFound = checkLadder(i);
      const found = {
        backgroundColor: 'grey',
      };

      // Todo - Put images
      boardHtml.push(
        <Cell
          sStyle={found}
          snake={snakeFound}
          ladder={ladderFound}
          player={playerFound}
          number={i}
        ></Cell>
      );
    }
    return boardHtml;
  };

  //Creating rows and columns
  useEffect(() => {
    const fixedCol = 10;
    const boardHtmlData = [];
    for (let i = 0; i < 10; i++) {
      const eachRow = createBoard(i * fixedCol + 1, fixedCol * (i + 1));
      boardHtmlData.push(<div key={i * fixedCol + 1 + 'main'}>{eachRow}</div>);
    }
    setBoardHtml(boardHtmlData);
  }, [gameData, resetBtn]);

  const handleSnakeOrLadderTile = () => {
    // Generate a random question and choices

    const rand = Math.floor(Math.random() * 3);
    const randomQuestions = Math.floor(Math.random() * (Mockdata.length - 1));

    const question = Mockdata[randomQuestions].question;
    const answer = Mockdata[randomQuestions].answer;
    const choices = Mockdata[randomQuestions].wrongAnswers;
    choices.splice(rand, 0, answer);

    console.log(choices);

    // Set the question, choices, and answer in state
    setQuestion(question);
    setChoices(choices);
    setAnswer(answer);

    // Show the popup
    toggle();
  };

  const onRollDiceClick = () => {
    setGameData((state) => {
      return {
        ...state,
        start: true,
      };
    });
    const min = 1;
    const max = 7;
    // const rand = Math.floor(min + Math.random() * (max - min));
    const rand = 1;
    let thePlayer = { ...gameData.player };

    if (thePlayer.status > 94) {
      const sum = thePlayer.status + rand;
      if (sum > 100) {
        setGameData((state) => {
          return {
            ...state,
            diceNumber: rand,
          };
        });

        return;
      } else if (sum === 100) {
        thePlayer.status = sum;
        setGameData((state) => {
          return {
            ...state,
            diceNumber: rand,
            player: thePlayer,
            gameover: true,
          };
        });

        toast.success('Game Over ' + thePlayer.name + ' Won', {
          position: toast.POSITION.TOP_CENTER,
          theme: 'colored',
        });
        return;
      }
    }

    //change the layout of the player if they are overlapping
    // if (gameData.player[0].status === gameData.player[1].status) {
    // pivot the 1st player to the left and the 2nd one to the right sing left prob in CSS
    // const playerOne = document.querySelector(".imageContainerP1");
    // console.log(
    //   playerOne.style.backgroundColor,''
    // );
    // playerOne.style.padding = "50px";
    // const playerTwo = document.querySelector(".imageContainerP2");
    // playerTwo.style.marginLeft = "10px";
    // }

    let status = thePlayer.status;

    // Snake check
    const snakeFound = checkSnake(status + rand);
    if (snakeFound !== undefined) {
      setDisable(true);

      setTileType({
        name: snakeFound,
        type: 'Snake',
      });

      toast.warn('Oh, a snake!', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored',
        autoClose: 1800,
      });

      setTimeout(() => {
        handleSnakeOrLadderTile();
      }, 1000);
    }

    // Ladder Check
    const ladderFound = checkLadder(status + rand);

    if (ladderFound !== undefined) {
      setDisable(true);
      setTileType({
        name: ladderFound,
        type: 'Ladder',
      });

      toast.warn('You are stepping on a Ladder!', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored',
        autoClose: 1800,
      });

      setTimeout(() => {
        handleSnakeOrLadderTile();
      }, 1000);
    }

    thePlayer.status += rand;
    const gameDataCopy = { ...gameData, diceNumber: rand, player: thePlayer };
    setGameData(gameDataCopy);
  };

  const handleAnswerSubmit = (selectedChoice) => {
    let player = gameData.player;

    switch (tileType.type) {
      case 'Snake':
        if (selectedChoice === answer) {
          toast.success('Thats correct, Well done!', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
            autoClose: 3000,
          });
        } else {
          toast.error('Bullocks!, Thats wrong', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
            autoClose: 3000,
          });
          player.status = tileType.name.tail;
          setGameData((state) => {
            return {
              ...state,
              player: player,
            };
          });
        }
        break;
      case 'Ladder':
        if (selectedChoice === answer) {
          toast.success('Thats correct, Well done!', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
            autoClose: 3000,
          });

          player.status = tileType.name.to;

          setGameData((state) => {
            return {
              ...state,
              player: player,
            };
          });
        } else {
          toast.error('Bullocks!, Thats wrong', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
            autoClose: 3000,
          });
          player.status = tileType.name.from;
          setGameData((state) => {
            return {
              ...state,
              player: player,
            };
          });
        }
        break;
      default:
        break;
    }
    // Hide the popup
    toggle();
    setDisable(false);
  };

  return (
    <>
      <Modal isOpen={modal} centered size="lg">
        <ModalHeader style={{ justifyContent: 'center' }}>
          <h2>{question}</h2>
        </ModalHeader>
        <ModalBody style={{ display: 'flex', justifyContent: 'center' }}>
          <ul className="listed-elements" font-size="20px">
            {choices.map((choice) => (
              <li key={choice}>
                <button onClick={() => handleAnswerSubmit(choice)}>
                  {choice}
                </button>
              </li>
            ))}
          </ul>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
        </ModalFooter> */}
      </Modal>
      <div className="boardGame">
        <div className="dice">
          <span style={{ padding: '2rem' }}>
            {gameData.player?.name + "'s Trun"}
          </span>
        </div>
        <div>
          <div className="table">{boardHtml}</div>
        </div>
        <div
          className="dice"
          style={{ cursor: disable ? 'not-allowed' : 'default' }}
        >
          <Button
            variant="primary"
            onClick={onRollDiceClick}
            disabled={disable}
          >
            Roll the dice
          </Button>
          <span style={{ padding: '2rem' }}>
            {gameData.start
              ? ` player1 moved 
               ${gameData.diceNumber}
               `
              : 'Start throwing the Dice'}
          </span>
          <Button onClick={() => resetBtn()}>Reset Game</Button>
        </div>
      </div>
    </>
  );
};

export default Board;

//Need help with the Following
// Cant implement the Procceeding Condition correclty, either Ladders or Snakes
