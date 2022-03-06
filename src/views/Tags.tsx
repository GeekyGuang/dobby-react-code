import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react'
import { Tag, useTags } from '../hooks/useTags'
import styled from 'styled-components'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Center, Space } from '../components/Center'
import { CategorySection } from '../components/Money/CategorySection'
import useCategory from 'hooks/useCategory'

const TagList = styled.ul`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #d5d5d9;
    color: #16b6ae;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon {
        fill: #16b6ae;
      }
    }
  }
`

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

function Tags() {
  const { tags: alltags, addTag } = useTags()
  const { category, setCategory } = useCategory()
  const [tags, setTags] = useState<Tag[]>([])
  useEffect(() => {
    setTags(alltags.filter((i) => i.type === category))
  }, [alltags, category])
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => addTag(category)}>新增标签</Button>
        <Space />
      </Center>
    </Layout>
  )
}

export default Tags
