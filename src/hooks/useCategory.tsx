import { useEffect, useState } from 'react'
import { useUpdate } from './useUpdate'

const useCategory = () => {
  const [category, setCategory] = useState<'-' | '+'>('-')
  useEffect(() => {
    const localCategory = window.localStorage.getItem('category')
    if (localCategory) setCategory(JSON.parse(localCategory))
  }, [])

  useUpdate(() => {
    window.localStorage.setItem('category', JSON.stringify(category))
  }, [category])

  return { category, setCategory }
}

export default useCategory
