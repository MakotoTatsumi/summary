import { VFC } from "react"
import styled from "styled-components"

import { Button } from "@components/atoms/Button"
import { Card } from "@components/molecules/Card"
import { DEFAULT_CATEGORY } from "@components/template/Home/const/category"
import { useCardDataList } from "@components/template/Home/hooks/useCardDataList"
import { useInitCardData } from "@components/template/Home/hooks/useInitCardData"
import { HomeProps } from "@components/template/Home/modules/Home.type"

export const Home: VFC<HomeProps> = (props) => {
  const { initData } = props

  const { initCardData, resetInitCard, initCardHandlerProps, initCardValueProps } = useInitCardData()
  const {
    cardDataList,
    setCardDataList,
    cardHandlerProps: { handleChangeTitle, handleChangeTextarea, handleSelect, handleDeleteCardWithPrompt },
  } = useCardDataList(initData)

  /**
   * 新規カードを追加時の処理
   */
  const handleAddNewCard = () => {
    setCardDataList((prev) => [initCardData, ...prev])
    resetInitCard()
  }

  return (
    <Root>
      <AddNewCard>
        <Card isInitialCard categoriesData={[...DEFAULT_CATEGORY]} {...initCardValueProps} {...initCardHandlerProps} />
        <ButtonWrapper>
          <Button onClick={handleAddNewCard}>Add</Button>
        </ButtonWrapper>
      </AddNewCard>

      <CardList>
        {cardDataList.map(({ id, title, content, category }) => (
          <CardListItem key={id}>
            <Card
              isEdit
              categoriesData={[...DEFAULT_CATEGORY]}
              titleValue={title}
              textareaValue={content}
              categoryName={category}
              handleChangeTitle={handleChangeTitle(id)}
              handleChangeTextarea={handleChangeTextarea(id)}
              handleSelect={handleSelect(id)}
              handleDeleteCardData={handleDeleteCardWithPrompt(id)}
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
