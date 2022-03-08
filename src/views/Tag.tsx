import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Layout from '../components/Layout'
import { useTags } from '../hooks/useTags'
import Icon from '../components/Icon'
import { Button } from '../components/Button'
import styled from 'styled-components'
import { Input } from '../components/Input'
import { Center, Space } from 'components/Center'
import { Dialog, Notify } from 'react-vant'

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

const ButtonWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;

  button:nth-child(1) {
    background: #ff9cab;
  }
`

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const history = useHistory()
  const { findTag, updateTag, deleteTag } = useTags()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  const [currentTag, setCurrentTag] = useState('')
  useEffect(() => {
    if (tag) {
      setCurrentTag(tag.name)
    }
  }, [tag])
  const tagContent = (tag: { id: number; name: string }) => (
    <>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={currentTag}
          onChange={(e) => {
            setCurrentTag(e.target.value)
            console.log(currentTag)
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <ButtonWrapper>
          <Button
            onClick={() => {
              Dialog.confirm({
                title: '提示',
                message: '是否删除该标签？',
              })
                .then(() => {
                  const result = deleteTag(tag.id)
                  if (result === 'success') {
                    history.goBack()
                    Notify.show({
                      type: 'success',
                      message: '删除成功',
                    })
                  }
                })
                .catch(() => {
                  console.log('catch')
                })
            }}
          >
            删除
          </Button>
          <Button
            onClick={() => {
              const result = updateTag(tag.id, currentTag)
              if (result === 'success') {
                Notify.show({ type: 'success', message: '更新成功' })
              }
            }}
          >
            更新
          </Button>
        </ButtonWrapper>
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
