import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.section`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  > ul {
    background: #ffffff;
    display: flex;
    font-size: 18px;
    color: #16b6ae;
    border-radius: 8px;
    border: 1px solid #16b6ae;
    overflow: hidden;
    margin-bottom: 0;
    > li {
      width: 50%;
      display: flex;
      height: 32px;
      justify-content: center;
      align-items: center;
      padding: 0 16px;
      &.selected {
        background: linear-gradient(
          45deg,
          rgba(0, 210, 180, 1) 0%,
          rgba(0, 191, 195, 1) 100%
        );
        color: white;
      }
    }
  }
`

type Props = {
  value: '-' | '+'
  onChange: (category: '-' | '+') => void
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type Keys = keyof typeof categoryMap
  const categoryList: Keys[] = ['-', '+']
  const category = props.value

  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? 'selected' : ''}
            onClick={() => props.onChange(c)}
            key={c}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export { CategorySection }
