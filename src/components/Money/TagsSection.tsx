import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
      &.selected {
        background: #f60;
      }
    } 
  }
  > button {
    background: none;border: none;padding: 2px 4px;
    border-bottom: 1px solid #333;color: #666;margin-top: 8px;
  }
`;

type Props = {
  value: string[]
  onChange: (tags: string[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣','食', '住', '行'])
  const selectedTags = props.value
  const onChange = props.onChange
  const onCreateTag = () => {
    const tag = window.prompt('请输入标签名')
    if(tag !== null) {
      setTags([...tags, tag])
    }
  }

  const onToggleTags = (tag:string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      onChange(selectedTags.filter(t => t !== tag))
    } else {
      onChange([...selectedTags, tag])
    }
  }

  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag}
                             onClick={()=>{onToggleTags(tag)}}
                             className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>{tag}</li>)}
      </ol>
      <button onClick={onCreateTag}>新增标签</button>
    </Wrapper>
    )
}

export {TagsSection}