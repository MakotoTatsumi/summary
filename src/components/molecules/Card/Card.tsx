import { useState, VFC } from "react"
import styled from "styled-components"

import { IconCheck } from "@components/atoms/Icons/IconCheck"
import { IconPen } from "@components/atoms/Icons/IconPen"
import { IconTrash } from "@components/atoms/Icons/IconTrash"
import { Select } from "@components/atoms/Select"
import { CardType } from "@components/molecules/Card/Card.type"

export const Card: VFC<CardType> = (props) => {
  const {
    isInitialCard,
    isEdit = false,
    titleValue,
    textareaValue,
    categoryName,
    categoriesData,
    handleChangeTextarea,
    handleChangeTitle,
    handleSelect,
    handleDeleteCardData,
  } = props

  const [isCardEdit, setIsCardEdit] = useState(isEdit)

  const handleEditStart = () => setIsCardEdit(false)
  const handleEditDone = () => {
    setIsCardEdit(true)
  }
  const handleDeleteCard = () => {
    if (handleDeleteCardData) handleDeleteCardData()
  }

  return (
    <Root>
      <InputWrapper>
        <StyledInput disabled={isCardEdit} placeholder="Title" value={titleValue} onChange={handleChangeTitle} />
        {(!isCardEdit || categoryName) && (
          <Select
            selectList={categoriesData}
            onSelect={handleSelect}
            isEdit={isCardEdit}
            selectedValue={categoryName}
          />
        )}
      </InputWrapper>
      <StyledTextarea
        disabled={isCardEdit}
        placeholder="Description"
        value={textareaValue}
        onChange={handleChangeTextarea}
      />
      {!isInitialCard && (
        <Edit>
          <EditIcon>
            {!isCardEdit ? (
              <div onClick={handleEditDone}>
                <IconCheck />
              </div>
            ) : (
              <EditIconNotEdditing>
                <div onClick={handleDeleteCard}>
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

const Root = styled.div`
  border-radius: 4px;
  border: 1px solid #cbd6d6;
  height: 200px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 3px 3px rgba(149, 163, 163, 0.1);
  display: flex;
  flex-direction: column;
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
