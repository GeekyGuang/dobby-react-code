import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds: number[],
  category: '-' | '+',
  note: string,
  amount: number,
  createAt: string
}

type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])

  const addRecord = (record: newRecordItem) => {
    if(record.amount <= 0) {
      alert('请输入金额')
      return false
    }
    if(record.tagIds.length === 0) {
      alert('请选择标签')
      return false
    }
    const newRecord:RecordItem = {...record, createAt: new Date().toISOString()}
    setRecords([...records, newRecord])
    return true
  }

  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  return {
    records,
    addRecord,
  }
}

