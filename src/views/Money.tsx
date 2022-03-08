import Layout from 'components/Layout'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TagsSection } from 'components/Money/TagsSection'
import { NoteSection } from 'components/Money/NoteSection'
import { CategorySection } from 'components/Money/CategorySection'
import { NumberPadSection } from 'components/Money/NumberPadSection'
import { useRecords, RecordItem } from '../hooks/useRecords'
import { DatetimePicker, Notify } from 'react-vant'
import '@vant/touch-emulator'
import dayjs from 'dayjs'
import Icon from 'components/Icon'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const defaultFormData: RecordItem = {
  tags: [],
  category: '-',
  note: '',
  amount: 0,
  createAt: dayjs().format() as string,
}

const CategoryWrapper = styled.div`
  background: #fff;
  @media (min-width: 500px) {
    section {
      width: 500px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const DateTimeWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  z-index: 1;
  .rv-picker {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`

const NoteWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  border: 1px solid #16b6ae;
  border-radius: 4px;
  padding: 8px 0 8px 8px;
  background: #fff;
  width: 130px;
  height: 40px;
  .icon {
    width: 16px;
    height: 16px;
    fill: #16b6ae;
    flex-shrink: 0;
  }

  .date {
    flex-grow: 1;
    padding: 0 6px;
  }
`

function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const [datePickerShow, setDatePickerShow] = useState(false)
  const [pickedDate, setPickedDate] = useState(dayjs())
  const [displayDate, setDisplayDate] = useState(dayjs().format('YYYY/MM/DD'))
  useEffect(() => {
    setDisplayDate(dayjs(pickedDate).format('YYYY/MM/DD'))
    setSelected({ ...selected, createAt: dayjs(pickedDate).format() })
  }, [pickedDate])
  useEffect(() => {
    setSelected({ ...selected, tags: [] })
  }, [selected.category])
  const confirmPickedDate = (value: Date) => {
    setDatePickerShow(!datePickerShow)
    setPickedDate(dayjs(value))
  }
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }
  const { addRecord } = useRecords()

  const onSubmit = () => {
    if (addRecord(selected)) {
      setSelected({ ...selected, tags: [], note: '', amount: 0 })
      Notify.show({ type: 'success', message: '保存成功' })
      return true
    }
    return false
  }

  return (
    <MyLayout scrollTop={9999}>
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategoryWrapper>
      <TagsSection
        value={selected.tags}
        onChange={(tags) => onChange({ tags })}
        type={selected.category}
      />
      <NoteWrapper>
        <NoteSection
          value={selected.note}
          onChange={(note) => onChange({ note })}
        />
        <CalendarWrapper onClick={() => setDatePickerShow(!datePickerShow)}>
          <Icon name="calendar" />
          <div className="date">{displayDate}</div>
        </CalendarWrapper>
      </NoteWrapper>
      {datePickerShow ? (
        <DateTimeWrapper
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setDatePickerShow(false)
            }
          }}
          className="datetimewrapper"
        >
          <DatetimePicker
            title="选择年月日"
            type="date"
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date()}
            value={new Date()}
            onCancel={() => setDatePickerShow(false)}
            onConfirm={(value: Date) => confirmPickedDate(value)}
          />
        </DateTimeWrapper>
      ) : (
        ''
      )}

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={onSubmit}
      />
    </MyLayout>
  )
}

export default Money
