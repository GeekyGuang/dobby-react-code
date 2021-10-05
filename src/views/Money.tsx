import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import { TagsSection } from 'components/Money/TagsSection';
import { NoteSection } from 'components/Money/NoteSection';
import { CategorySection } from 'components/Money/CategorySection';
import { NumberPadSection } from 'components/Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    category: '-' as Category,
    note: '',
    amount: 0
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags => onChange({tags})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;