import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../components/Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background-color: white;
`

function Statistics() {
  const [category, setCategory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getTag} = useTags()

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {records.map(record => <div key={record.createAt}>
        {record.tagIds.map(tagId => <span>{getTag(tagId)}</span>)}
        <hr />
        {record.amount}
        <hr />
        {day(record.createAt).format('YYYY年MM月DD日')}
      </div>)}
    </Layout>
  );

}

export default Statistics;