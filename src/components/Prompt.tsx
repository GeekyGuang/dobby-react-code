import React, { useEffect, useRef, useState } from 'react'
import { Dialog, Field, FieldInstance } from 'react-vant'
interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
  category: '-' | '+'
  addTag: (type: '-' | '+', tag: string) => void
}

export const Prompt: React.FC<Props> = (props) => {
  const { visible, setVisible, category, addTag } = props
  const [inputValue, setInputValue] = useState('')
  const fieldRef = useRef<FieldInstance>(null)
  useEffect(() => {
    fieldRef.current?.focus() // 输入框获取焦点
  }, [visible])
  return (
    <Dialog
      visible={visible}
      title="请输入标签名"
      showCancelButton
      onConfirm={() => {
        setVisible(false)
        const value = inputValue
        setInputValue('')
        console.log(value)
        addTag(category, value)
      }}
      onCancel={() => {
        setVisible(false)
        setInputValue('')
      }}
    >
      <Field
        ref={fieldRef}
        placeholder="在这里输入标签名"
        value={inputValue}
        onChange={setInputValue}
      />
    </Dialog>
  )
}
