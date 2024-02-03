import React, { useState } from 'react'
import TextField from '@mui/material/TextField'


const DatePicker = ({helperText, inputValue, setInputValue}) => {
  const handleInput = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '')

    let formattedValue = ''
    for (let i = 0; i < Math.min(numericValue.length, 6); i += 2) {
      formattedValue += numericValue.slice(i, i + 2) + '/'
    }

    setInputValue(formattedValue.slice(0, 8))
  }

  return (
    <TextField
      type="text"
      placeholder="mm/dd/yy"
      color='secondary'
      value={inputValue}
      onInput={handleInput}
      fullWidth
      size='small'
      helperText={helperText}
    />
  )
}

export default DatePicker
