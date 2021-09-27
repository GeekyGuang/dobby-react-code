import styled from 'styled-components';
import React, {useState} from 'react';

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

const NoteSection = () => {
  const [note, setNote] = useState('')
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               placeholder="在这里输入备注"
               value={note}
               onChange={(e)=>{setNote(e.target.value)}}/>
      </label>
    </Wrapper>
  )
}

export {NoteSection}