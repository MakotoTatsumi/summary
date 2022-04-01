import { ComponentPropsWithoutRef, FC } from "react"
import styled from "styled-components"

import { Colors } from "@/styles/colors"

type ChipsType = ComponentPropsWithoutRef<"span"> & {
  isActive: boolean
}

export const Chips: FC<ChipsType> = ({ children, ...prop }) => {
  return <>{children && <Root {...prop}>{children}</Root>}</>
}

const Root = styled.span<{ isActive: boolean }>`
  padding: 4px 16px;
  font-size: 12px;
  border: 1px solid ${Colors.COLOR_FF6B6E};
  background-color: ${({ isActive }) => isActive && `${Colors.COLOR_FF6B6E}`};
  border-radius: 20px;
  transition: background-color ease 0.3s;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
    background-color: ${Colors.COLOR_FF6B6E};
  }
`
