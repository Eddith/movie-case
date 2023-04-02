import React from "react";
import styled from "styled-components";

interface IInput {
  placeholder: string;
  onChange: (event: any) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  value: string;
  type: string;
  required?: boolean;
}

const Input: React.FC<IInput> = (props) => {
  const { placeholder, onChange, disabled, value, type, required } = props;

  return (
    <div>
      <InputB
        value={value}
        type={type}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

const InputB = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e6e6e6;
    border: 1px solid #000000;
  }
  &:disabled {
    background-color: #f2f2f2;
    border: 1px solid #000000;
    cursor: not-allowed;
  }
  &:active {
    background-color: #e6e6e6;
    border: 1px solid #000000;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default Input;
