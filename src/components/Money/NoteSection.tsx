import styled from 'styled-components'
import React, { ChangeEventHandler } from 'react'
import { Input } from '../Input'

const Wrapper = styled.section`
  font-size: 14px;
  background: #fafafa;
  padding: 12px 16px;
  flex-grow: 1;
`

type Props = {
  value: string
  onChange: (note: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Wrapper>
      <Input
        label="备注"
        type="text"
        placeholder="请输入备注"
        value={note}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export { NoteSection }
