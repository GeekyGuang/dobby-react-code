import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
import { useTags } from '../hooks/useTags'
import Icon from '../components/Icon'
import { Button } from '../components/Button'
import styled from 'styled-components'
import { Input } from '../components/Input'
import { Center, Space } from 'components/Center'

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  line-height: 20px;
  padding: 12px 16px;
  color: #16b6ae;

  .icon {
    width: 24px;
    height: 24px;
    fill: #16b6ae;
  }
`

const InputWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
  padding: 0 16px;
`

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const history = useHistory()
  const { findTag, updateTag, deleteTag } = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  const tagContent = (tag: { id: number; name: string }) => (
    <>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => updateTag(tag.id, e.target.value, '-')}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button
          onClick={() => {
            const result = deleteTag(tag.id)
            if (result === 'success') history.goBack()
          }}
        >
          删除标签
        </Button>
      </Center>
    </>
  )
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={() => history.goBack()} />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      {tag ? tagContent(tag) : ''}
    </Layout>
  )
}

export { Tag }
