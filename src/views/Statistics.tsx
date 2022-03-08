import Layout from '../components/Layout'
import React, { ReactNode, useState } from 'react'
import { CategorySection } from '../components/Money/CategorySection'
import styled from 'styled-components'
import { RecordItem, useRecords } from '../hooks/useRecords'
import { useTags } from '../hooks/useTags'
import day from 'dayjs'
import NP from 'number-precision'

const CategoryWrapper = styled.div`
  background-color: white;
  margin-top: 66px;
  @media (min-width: 500px) {
    section {
      width: 500px;
      left: 50%;
      transform: translateX(-50%);
    }
`
const Item = styled.div`
  background: white;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  color: #16b6ae;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #6addde;
  }
`

const Header = styled.h3`
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  color: #333;
`

const dayTransform = (date: string) => {
  const now = day()
  if (day(date).isSame(now, 'day')) {
    return '今天'
  } else if (day(date).isSame(now.subtract(1, 'day'), 'day')) {
    return '昨天'
  }
  return date
}

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getTag } = useTags()
  const hash: { [date: string]: RecordItem[] } = {}
  records
    .filter((r) => r.category === category)
    .forEach((r) => {
      const date = day(r.createAt).format('YYYY-MM-DD')
      if (!(date in hash)) {
        hash[date] = []
      }
      hash[date].push(r)
    })

  const hashArray = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return 1
    return 0
  })

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      {hashArray.map(([date, records]) => (
        <div key={date}>
          <Header>
            <span>{dayTransform(date)}</span>
            <span>
              &yen;
              {NP.strip(
                records.reduce((total, record) => total + record.amount, 0)
              )}
            </span>
          </Header>
          {records.map((record) => (
            <Item key={record.createAt}>
              <div className="tags">
                {record.tags?.reduce(
                  (result, span, index, array) =>
                    result.concat(
                      index < array.length - 1 ? [span, ','] : [span]
                    ),
                  [] as ReactNode[]
                )}
              </div>
              <div className="note">{record.note}</div>
              <div className="amount">&yen;{record.amount}</div>
            </Item>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export default Statistics
