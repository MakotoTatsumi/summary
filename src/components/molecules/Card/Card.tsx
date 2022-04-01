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
    <Root isEdit={isEdit}>
      <InputWrapper>
        <StyledInput disabled={!isEdit} placeholder="Title" value={title} onChange={handleChangeTitle} />
        {(isEdit || category) && (
          <Select selectList={categoriesData} onSelect={handleSelect} isEdit={isEdit} selectedValue={category} />
        )}
      </InputWrapper>
      <StyledTextarea disabled={!isEdit} placeholder="Description" value={content} onChange={handleChangeTextarea} />
      {!isInitialCard && (
        <Edit>
          <EditIcon>
            {isEdit ? (
              <div onClick={() => handleEditCompleteAndFinishEdit(data, id)}>
                <IconCheck />
              </div>
            ) : (
              <EditIconNotEdditing>
                <div onClick={handleDeleteCardData}>
                  <IconTrash />
                </div>
                <div onClick={handleEditStart}>
                  <IconPen />
                </div>
              </EditIconNotEdditing>
            )}
          </EditIcon>
        </Edit>
      )}
    </Root>
  )
}

const Root = styled.div<{ isEdit: boolean }>`
  border-radius: 4px;
  border: 1px solid #cbd6d6;
  height: 200px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 3px 3px rgba(149, 163, 163, 0.1);
  display: flex;
  flex-direction: column;
  transition: all ease 0.3s;
  ${({ isEdit }) =>
    isEdit &&
    css`
      box-shadow: 0px 0px 5px 5px rgba(149, 163, 163, 0.5);
    `}
`

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

const Edit = styled.div`
  display: inline-flex;
  justify-content: right;
`

const EditIcon = styled.div`
  cursor: pointer;
`

const EditIconNotEdditing = styled.div`
  display: flex;
  gap: 15px;
`
