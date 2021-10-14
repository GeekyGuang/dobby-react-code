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

const Item = styled.div`
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  
  > .note {
     margin-right: auto;
     margin-left: 16px;
     color: #999;
  }
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
      {records.filter(record => record.category === category).map(record =>
        <Item key={record.createAt}>
        <div className="tags">
          {record.tagIds.map(tagId => <span>{getTag(tagId)}</span>)}
        </div>
        <div className="note">
          {record.note}
        </div>
        <div className="amount">
          ￥{record.amount}
        </div>
        {/*{day(record.createAt).format('YYYY年MM月DD日')}*/}
      </Item>)}
    </Layout>
  );

}

export default Statistics;