import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    font-family: Consolas, monospace;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,.25),
                inset 0 5px 5px -5px rgba(0,0,0,.25);
  }
  > .pad {
    > button {
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      border: none;
      &.ok {
        float: right;
        height: 128px;
      }
      &.zero {
        width: 50%;
      }
      
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #D3D3D3;
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: #C1C1C1;
      }
      &:nth-child(8), &:nth-child(11){
        background: #B8B8B8;
      }
      &:nth-child(14) {
        background: #A9A9A9;
      }
      &:nth-child(12) {
        background: #9A9A9A;
      }
  
      &:active {
        background: #fff;
    }
  }
`;

const NumberPadSection = () => {
  const [output, setOutput] = useState('0')
  const onButtonClick = (e: React.MouseEvent) => {
    console.log((e.target as HTMLButtonElement).textContent);
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onButtonClick}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button>.</button>
        <button className="zero">0</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection}