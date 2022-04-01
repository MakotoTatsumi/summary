import produce from "immer"
import { ChangeEventHandler, useState } from "react"
import styled from "styled-components"

import { CardData } from "@/domain/cardData"
import { CategoryDataType } from "@/domain/category"
import { Button } from "@components/atoms/Button"
import { Card } from "@components/molecules/Card"
import { DEFAULT_CATEGORY } from "@components/template/Home/const/category"

const InitialData = { id: "", title: "", content: "", category: "", time: "" }

type HandlerType = keyof Pick<CardData, "title" | "content">
type HandleInitChangeCardData = (key: HandlerType) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
type HandleChangeCardData = (
  key: HandlerType,
) => (id: string) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>

export const Home = () => {
  /**
   * Init Card Data
   */
  const [initCardData, setInitCardData] = useState<CardData>(InitialData)
  const cardValueProps = {
    titleValue: initCardData.title,
    textareaValue: initCardData.content,
    categoryName: initCardData.category,
  }

  const handleChangeInitCardData: HandleInitChangeCardData = (key: HandlerType) => (event) => {
    setInitCardData((prev) => ({
      ...prev,
      [key]: event.target.value,
    }))
  }

  const handleChangeInitCardCategory = (selectItem: CategoryDataType) => {
    setInitCardData((prev) => ({
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
  const [cardDataList, setCardDataList] = useState<CardData[]>([])

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
    setCardDataList((prev) => [initCardData, ...prev])
    setInitCardData(InitialData)
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
