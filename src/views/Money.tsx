import Layout from 'components/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'
import { TagsSection } from 'components/Money/TagsSection'
import { NoteSection } from 'components/Money/NoteSection'
import { CategorySection } from 'components/Money/CategorySection'
import { NumberPadSection } from 'components/Money/NumberPadSection'
import { useRecords } from '../hooks/useRecords'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  category: '-' as Category,
  note: '',
  amount: 0,
}

const CategoryWrapper = styled.div`
  background: #fff;
  @media (min-width: 500px) {
    section {
      width: 500px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }
  const { addRecord } = useRecords()

  const onSubmit = () => {
    if (addRecord(selected)) {
      setSelected(defaultFormData)
      return true
    }
    return false
  }

  return (
    <MyLayout scrollTop={9999}>
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategoryWrapper>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={onSubmit}
      />
    </MyLayout>
  )
}

export default Money
