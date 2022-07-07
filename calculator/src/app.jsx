import React, { useState } from 'react';
import Buttons from './Components/buttons';
import Display from './Components/display';

function App() {
  const [firstRow, setfirstRow] = useState([
    {id: 0, label: 'AC', value: 'AC'},
    {id: 1, label: 'DEL',},
    {id: 2, label: '%', value: '%'},
    {id: 3, label: '/', value: '/'},
  ]);

  const [secondRow, setSecondRow] = useState([
    {id: 0, label: '7', value: '7'},
    {id: 1, label: '8', value: '8'},
    {id: 2, label: '9', value: '9'},
    {id: 3, label: 'X', value: 'X'},
  ])

  const [thirdRow, setThirdRow] = useState([
    {id: 0, label: '4', value: '4'},
    {id: 1, label: '5', value: '5'},
    {id: 2, label: '6', value: '6'},
    {id: 3, label: '-', value: '-'},
  ])

  const [fourthRow, setFourthRow] = useState([
    {id: 0, label: '1', value: '1'},
    {id: 1, label: '2', value: '2'},
    {id: 2, label: '3', value: '3'},
    {id: 3, label: '+', value: '+'},
  ])

  const [fifthRow, setFifthRow] = useState([
    {id: 0, label: 'I/O',},
    {id: 1, label: '0', value: '0'},
    {id: 2, label: '.',},
    {id: 3, label: '=', value: '='},
  ])

  const [finalSum, setFinalSum] = useState('');
  const [shortSum, setShortSum] = useState('');
  const [prevNum, setPrevNum] = useState(null);
  const [nextNum, setNextNum] = useState(null);
  const [op, setOp] = useState(null);

  const numButtons = function(button) {
    switch(button) {
      case '0':
        if(prevNum !== null) {
          setNextNum(0);
        }  

        setShortSum(shortSum + '0');
      break;
      case '1':
        if(prevNum !== null) {
          setNextNum(1);
        }  

        setShortSum(shortSum + '1');
      break;

      case '2':
        if(prevNum !== null) {
          setNextNum(2);
        }  

        setShortSum(shortSum + '2');
      break;

      case '3':
        if(prevNum !== null) {
          setNextNum(3);
        }  

        setShortSum(shortSum + '3');
      break;

      case '4':
        if(prevNum !== null) {
          setNextNum(4);
        }  

        setShortSum(shortSum + '4');
      break;

      case '5':
        if(prevNum !== null) {
          setNextNum(5);
        }  

        setShortSum(shortSum + '5');
      break;

      case '6':
        if(prevNum !== null) {
          setNextNum(6);
        }  

        setShortSum(shortSum + '6');
      break;

      case '7':
        if(prevNum !== null) {
          setNextNum(7);
        }  

        setShortSum(shortSum + '7');
      break;

      case '8':
        if(prevNum !== null) {
          setNextNum(8);
        }  

        setShortSum(shortSum + '8');
      break;

      case '9':
        if(prevNum !== null) {
          setNextNum(9);
        }  

        setShortSum(shortSum + '9');
      break;

      case 'AC':
        setShortSum('');
      break;

      case '+':
        if(prevNum == null) {
          setPrevNum(parseFloat(shortSum));
        }

        setOp('+');
        setShortSum(shortSum + '+');
      break;

      case '-':
        if(prevNum == null) {
          setPrevNum(parseFloat(shortSum));
        }

        setOp('-');
        setShortSum(shortSum + '-');
      break;

      case 'X':
        if(prevNum == null) {
          setPrevNum(parseFloat(shortSum));
        }

        setOp('X');
        setShortSum(shortSum + 'x');
      break;

      case '/':
        if(prevNum == null) {
          setPrevNum(parseFloat(shortSum));
        }

        setOp('/');
        setShortSum(shortSum + '/');
      break;

      case '%':
        if(prevNum == null) {
          setPrevNum(parseFloat(shortSum));
        }

        setOp('%');
        setShortSum(shortSum + '%');
      break;

      case '=':
        if(op == '+') {
          let resultNum = prevNum + parseFloat(nextNum);

          setFinalSum(resultNum);
          setShortSum('');
          setPrevNum(resultNum);
          setNextNum('');
          setOp('');
        }else if(op == '-') {
          let resultNum = prevNum - parseFloat(nextNum);

          setFinalSum(resultNum);
          setShortSum('');
          setPrevNum(resultNum);
          setNextNum('');
          setOp('');
        }else if(op == 'X') {
          let resultNum = prevNum * parseFloat(nextNum);

          setFinalSum(resultNum);
          setShortSum('');
          setPrevNum(resultNum);
          setNextNum('');
          setOp('');
        }else if(op == '/') {
          let resultNum = prevNum / parseFloat(nextNum);

          setFinalSum(resultNum);
          setShortSum('');
          setPrevNum(resultNum);
          setNextNum('');
          setOp('');
        }else if(op == '%') {
          let resultNum = prevNum / parseFloat(nextNum);

          setFinalSum(resultNum);
          setShortSum('');
          setPrevNum(resultNum);
          setNextNum('');
          setOp('');
        }
      break;
    }
  }

  return(
    <React.Fragment>
      <main id='main-component'>
        <div id='calc' className='container position-absolute'>
          <Display divStyle={'row mt-2 w-25 mx-auto'}
            inputStyle={'col  form-control no-border'}
            displayValue={shortSum}
            sumValue={finalSum}
            finalStyle={'text-end'}
          />
          <Buttons keypad={firstRow} 
            btnStyle={'col mt-2 btn btn-primary'}
            divStyle={'row gap-2 w-25 mx-auto'}
            idName={'first-row'}
            calc={numButtons}
          />
          <Buttons keypad={secondRow} 
            btnStyle={'col mt-2 btn btn-primary'}
            divStyle={'row gap-2 w-25 mx-auto'}
            idName={'second-row'}
            calc={numButtons}
          />
          <Buttons keypad={thirdRow} 
            btnStyle={'col mt-2 btn btn-primary'}
            divStyle={'row gap-2 w-25 mx-auto'}
            idName={'third-row'}
            calc={numButtons}
          />
          <Buttons keypad={fourthRow} 
            btnStyle={'col mt-2 btn btn-primary'}
            divStyle={'row gap-2 w-25 mx-auto'}
            idName={'fourth-row'}
            calc={numButtons}
          />
          <Buttons keypad={fifthRow} 
            btnStyle={'col mt-2 btn btn-primary'}
            divStyle={'row gap-2 w-25 mx-auto'}
            idName={'fifth-row'}
            calc={numButtons}
          />
        </div>
      </main>
    </React.Fragment>
  );
} 

export default App;