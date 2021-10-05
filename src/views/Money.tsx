import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import { TagsSection } from 'components/Money/TagsSection';
import { NoteSection } from 'components/Money/NoteSection';
import { CategorySection } from 'components/Money/CategorySection';
import { NumberPadSection } from 'components/Money/NumberPadSection';
import set = Reflect.set;

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
  return (
    <MyLayout>
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={(tags: string[]) => setSelected({...selected, tags: tags})}/>
      <NoteSection value={selected.note}
                   onChange={(note: string) => setSelected({...selected, note: note})}/>
      <CategorySection value={selected.category}
                       onChange={(category: '-'|'+') => setSelected({...selected, category: category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount: number) => setSelected({...selected, amount: amount})}/>
    </MyLayout>
  );
}

export default Money;