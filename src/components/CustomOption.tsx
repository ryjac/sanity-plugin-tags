// CustomOption.tsx
import React from 'react'
// Define the Tag type based on the Sanity schema with an additional _key
type Tag = {
  value: string
  label: string
  _key: string // _key is added to uniquely identify each tag in arrays
}
interface CustomOptionProps {
  data: Tag
  innerRef: React.Ref<HTMLDivElement>
  innerProps: any
  isFocused: boolean
  handleDelete: (tag: Tag) => void
}

const CustomOption: React.FC<CustomOptionProps> = ({
  data,
  innerRef,
  innerProps,
  isFocused,
  handleDelete,
}) => {
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        backgroundColor: isFocused ? '#f0f0f0' : 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px',
        cursor: 'pointer',
      }}
    >
      <span>{data.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleDelete(data)
        }}
        style={{marginLeft: '8px', cursor: 'pointer'}}
      >
        X
      </button>
    </div>
  )
}

export default CustomOption
