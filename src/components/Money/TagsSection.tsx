import styled from 'styled-components';

const TagsSection = styled.section`
  flex-grow: 1;
  background: #fff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      font-size: 14px;display: inline-block;background: #D9D9D9;
      border-radius: 18px;padding: 3px 18px;margin: 8px 12px;
    } 
  }
  > button {
    background: none;border: none;padding: 2px 4px;
    border-bottom: 1px solid #333;color: #666;margin-top: 8px;
  }
`;

export {TagsSection}