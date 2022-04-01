import { VFC } from "react"
import styled from "styled-components"

import { Button } from "@components/atoms/Button"
import { Card } from "@components/molecules/Card"
import { DEFAULT_CATEGORY } from "@components/template/Home/const/category"
import { useCardDataList } from "@components/template/Home/hooks/useCardDataList"
import { useInitCardData } from "@components/template/Home/hooks/useInitCardData"
import { HomeProps } from "@components/template/Home/modules/Home.type"
import { addUpdatedAt } from "@components/template/Home/modules/addUpdatedAt"
import { setLocalStorage } from "@components/template/Home/modules/setLocalStorage"
import { sortCardDateListByDate } from "@components/template/Home/modules/sortCardDateListByDate"

export const Home: VFC<HomeProps> = (props) => {
  const { initData } = props

  const { initCardData, resetInitCard, initCardHandlerProps } = useInitCardData()
  const {
    cardDataList,
    setCardDataList,
    cardHandlerProps: {
      handleChangeTitle,
      handleChangeTextarea,
      handleSelect,
      handleDeleteCardWithPrompt,
      handleEditComplete,
    },
  } = useCardDataList(initData)

  /**
   * 新規カードを追加時の処理
   */
  const handleAddNewCard = () => {
    setCardDataList((prev) => {
      const updatedData = [addUpdatedAt(initCardData), ...prev]
      const sortedData = sortCardDateListByDate(updatedData)
      setLocalStorage(sortedData)
      return sortedData
    })
    resetInitCard()
  }

  return (
    <Root>
      <AddNewCard>
        <Card isInitialCard categoriesData={[...DEFAULT_CATEGORY]} data={initCardData} {...initCardHandlerProps} />
        <ButtonWrapper>
          <Button onClick={handleAddNewCard}>Add</Button>
        </ButtonWrapper>
      </AddNewCard>

      <CardList>
        {cardDataList.map((data) => (
          <CardListItem key={data.id}>
            <Card
              isEdit
              categoriesData={[...DEFAULT_CATEGORY]}
              data={data}
              handleChangeTitle={handleChangeTitle(data.id)}
              handleChangeTextarea={handleChangeTextarea(data.id)}
              handleSelect={handleSelect(data.id)}
              handleDeleteCardData={handleDeleteCardWithPrompt(data.id)}
              handleEditComplete={handleEditComplete}
            />
          </CardListItem>
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

const CardListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
