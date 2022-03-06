import styled from 'styled-components'
import React from 'react'

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  > span {
    margin-right: 16px;
    white-space: nowrap;
    color: #16b6ae;
    white-space: nowrap;
    line-height: 40px;
  }
  > input {
    display: block;
    height: 40px;
    width: 100%;
    background: none;
    border: none;
    color: #666;
    /* 
    &::placeholder {
      color: #b7b7b7;
    } */
  }
`
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest} />
    </Label>
  )
}
export { Input }
