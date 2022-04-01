import { useState, VFC } from "react"
import styled, { css } from "styled-components"

import { CardData } from "@/domain/cardData"
import { IconCheck } from "@components/atoms/Icons/IconCheck"
import { IconPen } from "@components/atoms/Icons/IconPen"
import { IconTrash } from "@components/atoms/Icons/IconTrash"
import { Select } from "@components/atoms/Select"
import { CardType } from "@components/molecules/Card/Card.type"

export const Card: VFC<CardType> = (props) => {
  const {
    isInitialCard,
    data,
    data: { id, title, category, content },
    categoriesData,
    handleChangeTextarea,
    handleChangeTitle,
    handleSelect,
    handleDeleteCardData,
    handleEditComplete,
  } = props

  const [isEdit, setIsEdit] = useState(isInitialCard || false)

  const handleEditStart = () => setIsEdit(true)

  const handleEditCompleteAndFinishEdit = (data: CardData, id: string) => {
    if (handleEditComplete) handleEditComplete(data, id)
    setIsEdit(false)
  }

  return (
    <Root isEdit={!isInitialCard && isEdit}>
      <InputWrapper>
        <StyledInput disabled={!isEdit} placeholder="No Title" value={title} onChange={handleChangeTitle} />
      </InputWrapper>
      <StyledTextarea disabled={!isEdit} placeholder="Description" value={content} onChange={handleChangeTextarea} />

      <BottomArea>
        {(isEdit || category) && (
          <SelectWrapper>
            <Select selectList={categoriesData} onSelect={handleSelect} isEdit={isEdit} selectedValue={category} />
          </SelectWrapper>
        )}
        {!isInitialCard && (
          <Edit>
            {isEdit ? (
              <StyledIcon onClick={() => handleEditCompleteAndFinishEdit(data, id)}>
                <IconCheck />
              </StyledIcon>
            ) : (
              <EditIconNotEdditing>
                <StyledIcon onClick={handleDeleteCardData}>
                  <IconTrash />
                </StyledIcon>
                <StyledIcon onClick={handleEditStart}>
                  <IconPen />
                </StyledIcon>
              </EditIconNotEdditing>
            )}
          </Edit>
        )}
      </BottomArea>
    </Root>
  )
}

const Root = styled.div<{ isEdit: boolean }>`
  border-radius: 4px;
  border: 1px solid #cbd6d6;
  height: 300px;
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: box-shadow ease 0.3s;

  ${({ isEdit }) =>
    isEdit &&
    css`
      box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.2);
    `}
`

const SelectWrapper = styled.div``

const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`

const StyledInput = styled.input.attrs({ type: "text" })`
  font-size: 20px;
  font-weight: bold;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #c5c9c6;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #c5c9c6;
    font-weight: normal;
  }

  &:disabled {
    background-color: transparent;
  }
`

const StyledTextarea = styled.textarea`
  font-size: 16px;
  resize: none;
  padding: 4px;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #c5c9c6;
    font-weight: normal;
  }

  &:disabled {
    background-color: transparent;
  }
`

const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
`

const Edit = styled.div`
  display: flex;
  justify-content: right;
  margin-left: auto;
`

const StyledIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const EditIconNotEdditing = styled.div`
  display: flex;
  gap: 15px;
`
