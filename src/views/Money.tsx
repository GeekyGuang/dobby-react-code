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
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags: string[]) => setSelected({...selected, tags: tags})}/>
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;