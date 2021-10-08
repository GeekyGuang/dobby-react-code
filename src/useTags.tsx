import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}]

const useTags = () => {
  const [tags, setTags] = useState<{id: number, name: string}[]>(defaultTags)
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const updateTag = (id:number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
  }
  const deleteTag = (id:number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  const addTag =  () => {
    const tag = window.prompt('请输入标签名')
    if(tag !== null && tag !== '') {
      setTags([...tags, {id: createId(), name: tag}])
    }
  }

  return {
    tags,
    findTag,
    setTags,
    updateTag,
    deleteTag,
    addTag
  }
}

export {useTags}