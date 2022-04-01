import produce from "immer"
import { ChangeEventHandler, useState } from "react"
import styled from "styled-components"

import { CategoryDataType } from "@/domain/category"
import { TodoItemData } from "@/domain/totoItemData"
import { Button } from "@components/atoms/Button"
import { Card } from "@components/molecules/Card"
import { DEFAULT_CATEGORY } from "@components/template/Home/const/category"

const InitialData = { id: "", title: "", content: "", category: "", time: "" }

type HandlerType = keyof Pick<TodoItemData, "title" | "content">
type HandleInitChangeCardData = (key: HandlerType) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
type HandleChangeCardData = (
  key: HandlerType,
) => (id: string) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>

export const Home = () => {
  /**
   * Init Card Data
   */
  const [initTodoData, setInitTodoData] = useState<TodoItemData>(InitialData)
  const cardValueProps = {
    titleValue: initTodoData.title,
    textareaValue: initTodoData.content,
    categoryName: initTodoData.category,
  }

  const handleChangeInitCardData: HandleInitChangeCardData = (key: HandlerType) => (event) => {
    setInitTodoData((prev) => ({
      ...prev,
      [key]: event.target.value,
    }))
  }

  const handleChangeInitCardCategory = (selectItem: CategoryDataType) => {
    setInitTodoData((prev) => ({
      ...prev,
      category: selectItem?.value || "",
    }))
  }

  const initCardHandlerProps = {
    handleChangeTextarea: handleChangeInitCardData("content"),
    handleChangeTitle: handleChangeInitCardData("title"),
    handleSelect: handleChangeInitCardCategory,
  }

  /**
   * Card Data
   */
  const [cardDataList, setCardDataList] = useState<TodoItemData[]>([])

  const handleChangeCardData: HandleChangeCardData = (key) => (id) => (event) => {
    setCardDataList((prev) => {
      const index = prev.findIndex((data) => data.id === id)
      if (!index) return prev

      return produce(prev, (draft) => {
        draft[index][key] = event.target.value
      })
    })
  }

  const handleChangeCategory = (id: string) => (selectItem: CategoryDataType) => {
    setCardDataList((prev) => {
      const index = prev.findIndex((data) => data.id === id)
      if (!index) return prev

      return produce(prev, (draft) => {
        draft[index]["category"] = selectItem.value
      })
    })
  }

  const cardHandlerProps = {
    handleChangeTextarea: handleChangeCardData("content"),
    handleChangeTitle: handleChangeCardData("title"),
    handleSelect: handleChangeCategory,
  }

  const handleAddNewCard = () => {
    setCardDataList((prev) => [initTodoData, ...prev])
    setInitTodoData(InitialData)
  }

  console.log(cardDataList)

  return (
    <Root>
      <AddNewCard>
        <Card
          isInitialCard
          isEdit
          categoriesData={[...DEFAULT_CATEGORY]}
          {...cardValueProps}
          {...initCardHandlerProps}
        />
        <ButtonWrapper>
          <Button onClick={handleAddNewCard}>Add</Button>
        </ButtonWrapper>
      </AddNewCard>

      <CardList>
        {cardDataList.map((data) => (
          <Card
            key={data.id}
            isEdit
            categoriesData={[...DEFAULT_CATEGORY]}
            titleValue={data.title}
            textareaValue={data.content}
            categoryName={data.category}
            {...cardHandlerProps}
          />
        ))}
      </CardList>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
  margin: 10px auto;
  max-width: 1200px;
`

const AddNewCard = styled.div`
  margin-bottom: 40px;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const CardList = styled.ul`
  margin-top: 40px;
`
