import { VFC } from "react"
import styled from "styled-components"

import { Button } from "@components/atoms/Button"
import { Card } from "@components/molecules/Card"
import { FilterOptions } from "@components/molecules/FilterOptions"
import { DEFAULT_CATEGORY } from "@components/template/Home/const/optionData"
import { useCardDataList } from "@components/template/Home/hooks/useCardDataList"
import { useFilter } from "@components/template/Home/hooks/useFilter"
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

  const { handleClickOption, checkedList, filterOption } = useFilter()

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

  /**
   * filterで絞り込んだあとのデータリスト
   * 何もチェックされていなければ全データを返す
   */
  const currentCardData =
    checkedList.length > 0 ? cardDataList.filter((item) => checkedList.includes(item.category)) : cardDataList

  return (
    <Root>
      <EditArea>
        <AddNewCard>
          <Card isInitialCard categoriesData={[...DEFAULT_CATEGORY]} data={initCardData} {...initCardHandlerProps} />
          <ButtonWrapper>
            <Button onClick={handleAddNewCard}>Add</Button>
          </ButtonWrapper>
        </AddNewCard>
        <FilterArea>
          <FilterOptions
            title={"CATEGORY"}
            options={filterOption}
            handleClickOption={handleClickOption}
          ></FilterOptions>
        </FilterArea>
      </EditArea>

      <CartListTitle>Posts</CartListTitle>
      <CardList>
        {currentCardData.map((data) => {
          return (
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
          )
        })}
      </CardList>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
  margin: 10px auto;
  max-width: 1200px;
`

const EditArea = styled.div`
  display: flex;
`

const AddNewCard = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 60px;
`

const FilterArea = styled.div``

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const CartListTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const CardListItem = styled.li`
  width: calc(50% - 10px);

  &:nth-child(2n -1) {
    margin-right: 20px;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
