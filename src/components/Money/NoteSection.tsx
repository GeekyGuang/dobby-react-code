import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
  font-size: 14px;
  background: #f5f5f5;
  padding: 14px 16px;
`;

type Props = {
  value: string;
  onChange: (note: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  }
  return (
    <Wrapper>
      <Input label="备注" type="text" placeholder="在这里输入备注" defaultValue={note} onChange={onChange} />
    </Wrapper>
  )
}

export {NoteSection}