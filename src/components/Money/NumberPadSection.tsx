import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/generateOutput';

type Props = {
  value: number,
  onChange: (amount: number) => void
  onOK: () => boolean
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let value: string;
    if (output.length > 16) {
      value = output.slice(0, 16);
    } else if (output.length === 0) {
      value = '0';
    } else {
      value = output;
    }
    _setOutput(value)
    props.onChange(parseFloat(value));
  };
  const onButtonClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if (text === 'OK') {
      if(props.onOK()){
        _setOutput('0')
      }
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
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
  );
};

export {NumberPadSection};