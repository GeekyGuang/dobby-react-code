import styled from 'styled-components';

const NotesSection = styled.section`
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

export {NotesSection}