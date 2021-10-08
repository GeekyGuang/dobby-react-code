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
    const tag = {id,name}
    const newTags = JSON.parse(JSON.stringify(tags))
    let index = -1
    for (let i = 0; i<newTags.length; i++){
      if(newTags[i].id === id) {
        index = i;
        break;
      }
    }
    if(index >= 0){
      newTags.splice(index, 1, tag)
    }
    setTags(newTags)

  }
  return {
    tags,
    findTag,
    setTags,
    updateTag
  }
}

export {useTags}