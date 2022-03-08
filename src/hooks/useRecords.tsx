import { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { useUpdate } from './useUpdate'
import { Tag } from './useTags'
import { Notify } from 'react-vant'

export type RecordItem = {
  tags: string[]
  category: '-' | '+'
  note: string
  amount: number
  createAt: string
}

type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])

  const addRecord = (record: RecordItem) => {
    if (record.amount <= 0) {
      Notify.show({ type: 'warning', message: '请输入金额' })
      return false
    }
    if (record.tags.length === 0) {
      Notify.show({ type: 'warning', message: '请选择标签' })
      return false
    }
    const newRecord: RecordItem = JSON.parse(JSON.stringify(record))
    setRecords([...records, newRecord])
    return true
  }

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, records)

  return {
    records,
    addRecord,
  }
}
