import { useEffect, useState } from 'react'
import { createId } from '../lib/createId'
import { useUpdate } from './useUpdate'
import { Notify } from 'react-vant'

export interface Tag {
  id: number
  name: string
  type: string
}

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([])
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: '公交', type: '-' },
        { id: createId(), name: '地铁', type: '-' },
        { id: createId(), name: '奶茶', type: '-' },
        { id: createId(), name: '吃饭', type: '-' },
        { id: createId(), name: '工资', type: '+' },
        { id: createId(), name: '彩票', type: '+' },
        { id: createId(), name: '兼职', type: '+' },
      ]
    }
    setTags(localTags)
  }, [])

  useUpdate(
    () => window.localStorage.setItem('tags', JSON.stringify(tags)),
    tags
  )

  const findTag = (id: number) => {
    return tags.filter((tag) => tag.id === id)[0]
  }

  const updateTag = (id: number, name: string) => {
    if (name.trim() === '') {
      Notify.show({ type: 'danger', message: '标签名不可为空' })
      return
    }

    if (tags.filter((i) => i.name === name && i.id !== id).length > 0) {
      Notify.show({ type: 'danger', message: '标签名已存在' })
      return
    }

    setTags(tags.map((tag) => (tag.id === id ? { ...tag, name } : tag)))
    return 'success'
  }

  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id))
    return 'success'
  }

  const addTag = (type: string) => {
    const tag = window.prompt('请输入标签名')
    if (tag?.trim() === '') {
      Notify.show({ type: 'danger', message: '标签名不可为空' })
      return
    }
    if (tag !== null && tag !== '') {
      if (tags.filter((i) => i.type === type && i.name === tag).length > 0) {
        Notify.show({ type: 'danger', message: '标签名已存在' })
        return
      }
      setTags([...tags, { id: createId(), name: tag, type }])
    }
  }

  const getTag = (id: number) => {
    const tag = tags.filter((t) => t.id === id)[0]
    return tag ? tag.name : ''
  }

  return {
    tags,
    setTags,
    findTag,
    updateTag,
    deleteTag,
    addTag,
    getTag,
  }
}

export { useTags }
