import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{id: number, name: string}[]>([])
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}]
    }
    setTags(localTags)
  },[])

  useUpdate(()=> window.localStorage.setItem('tags', JSON.stringify(tags)), [tags])

  const findTag = (id:number) => {
    return tags.filter(tag => tag.id === id)[0]}
  const updateTag = (id:number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
  }
  const deleteTag = (id:number) => {
    if(tags.length === 1) {
      window.alert('请至少保留一个标签')
      return
    }
    setTags(tags.filter(tag => tag.id !== id))
    return 'success'
  }

  const addTag =  () => {
    const tag = window.prompt('请输入标签名')
    if(tag !== null && tag !== '') {
      setTags([...tags, {id: createId(), name: tag}])
    }
    console.log(tags)
  }

  const getTag = (id:number) => {
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : ''
  }

  return {
    tags,
    setTags,
    findTag,
    updateTag,
    deleteTag,
    addTag,
    getTag
  }
}

export {useTags}