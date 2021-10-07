import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
  font-size: 14px;
  background: #f5f5f5;
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px; white-space: nowrap;
    }
    > input {
    display: block;
    height: 72px;
    width: 100%;
    background: none;
    border: none;
  }
  }
`;

type Props = {
  value: string;
  onChange: (note: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const inputRef = useRef<HTMLInputElement>(null)
  const getNote = () => {
    if(inputRef.current !== null)
      props.onChange(inputRef.current.value);
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               placeholder="在这里输入备注"
               defaultValue={note}
               ref={inputRef}
               onBlur={getNote}
               />
      </label>
    </Wrapper>
  )
}

export {NoteSection}