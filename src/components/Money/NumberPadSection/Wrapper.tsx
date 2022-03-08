import styled from 'styled-components'

const Wrapper = styled.section`
  > .output {
    color: #16b6ae;
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    font-family: Consolas, monospace;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.2),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.2);
  }
  > .pad {
    background: linear-gradient(
      45deg,
      rgba(0, 210, 180, 1) 0%,
      rgba(0, 191, 195, 1) 100%
    );

    > button {
      background: transparent;
      font-size: 24px;
      width: 25%;
      height: 64px;
      float: left;
      border: none;
      color: white;

      border-right: 1px solid #8fe4e5;
      border-bottom: 1px solid #8fe4e5;
      &.ok {
        float: right;
        height: 128px;
      }
      &.zero {
        width: 50%;
      }

      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12) {
        border-right: 0;
        font-size: 18px;
      }

      &:active {
        background: #fff;
        color: #16b6ae;
      }
    }
  }
`
export { Wrapper }
