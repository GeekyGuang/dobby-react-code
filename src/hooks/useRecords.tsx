import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[],
  category: '-' | '+',
  note: string,
  amount: number
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])

  const addRecord = (record: RecordItem) => {
    setRecords([...records, record])
  }

  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  return {
    records,
    addRecord,
  }
}

