import { ComponentPropsWithoutRef, FC } from "react"
import styled from "styled-components"

import { Colors } from "@/styles/colors"

export const Button: FC<Omit<ComponentPropsWithoutRef<"button">, "type">> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export const StyledButton = styled.button.attrs({ type: "button" })`
  outline: none;
  cursor: pointer;
  border: none;
  color: ${Colors.COLOR_FFFFFF};
  font-size: 16px;
  opacity: 0.8;
  background-color: ${Colors.COLOR_FF6B6E};
  border-radius: 20px;
  height: 40px;
  width: 200px;
  transition: opacity ease 0.3s;

  &:hover {
    opacity: 1;
  }
`
