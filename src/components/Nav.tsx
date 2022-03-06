import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Icon from './Icon'

const NavWrapper = styled.nav`
  background: #fafafa;
  /* line-height: 24px; */
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      color: #b7b7b7;
      > a {
        padding-bottom: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        .icon {
          margin: 2px 0;
          width: 32px;
          height: 32px;
          fill: #b7b7b7;
        }
        &.selected {
          color: #16b6ae;
          .icon {
            fill: #16b6ae;
          }
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="label" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
