import React from "react"
import styled from "styled-components"

interface IButton {
  text: string
  onClick: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

const Button: React.FC<IButton> = (props) => {
  const { text, onClick, disabled } = props

  return (
    <div>
      <ButtonB onClick={onClick} disabled={disabled}>
        {text}
      </ButtonB>
    </div>
  )
}

const ButtonB = styled.button`
  width: 100%;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
  }
  &:disabled {
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    cursor: not-allowed;
  }
  &:active {
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
  }
`

export default Button
