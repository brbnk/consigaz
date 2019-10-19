import React, { useState } from 'react'
import styled from 'styled-components'

import DatePicker from './Inputs/date-selector'
import TypeSelector from './Inputs/type-selector'
import QuantitySelector from './Inputs/quantity-selector'
import ResponsibleSecletor from './Inputs/responsible-selector'
import AmountInput from './Inputs/amount-input'
import CommentInput from './Inputs/comment-input'

const ExpenseContainer = styled.div`
    display: grid;
    grid-auto-rows: 50px auto;
    grid-template-columns: 1fr;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div { 
        display: flex;
        span { 
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            cursor: pointer;
            color: #212B34;
            font-weight: bold;
            width: 20px;
            height: 20px;
            border-radius: 5px;

            i { 
                font-size: 1em;
            }
        }
    }
`

const FormsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    max-height: 70vh;
    overflow-y: auto;
`

const Cards = styled.div`
    display: grid;
    grid-template-rows: .1fr .9fr;
    grid-template-columns: 1fr;
    height: 100%;
    width: 100%;
    background-color: white;
    color: black;
    padding: 15px;
    border-radius: 2px
`

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div { 
        width: 30px;
        border-bottom: 1px solid black;
    }
`

const Form = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

const DoubleForm = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: .5fr .5fr;
    column-gap: 10px;
    margin-top: 15px;
`

const AddExpense = styled.span`
    background-color: #00FFD5;
`

const SendButton = styled.span`
    background-color: #00FFD5;
`

const Total = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    color: white;
`

const CARD_LIMIT = 8

function Expenses() {
   const [id, setid] = useState(1) 
   const [cards, setCards] = useState({})
   const [total, setTotal] = useState(0)

   React.useEffect(() => { 
        let sum = Object.keys(cards).reduce((acc, card) => { 
            let a = cards[card]['amount']
            let len = cards[card]['amount'].length

            if (a.includes('.') || a.includes(',')) { 
                if (a[len - 1] == '.' || a[len - 1] == ',') { 
                    a = a.slice(0, len-1)
                }
            } 

            return acc + parseFloat(a)
        }, 0.0)

        setTotal(sum)
   })

   return (<>
        <ExpenseContainer>
            <HeaderContainer> 
                <div style={{ display: 'flex' }}>
                    <h4> Despesas Diárias </h4>
                    {
                        Object.keys(cards).length < CARD_LIMIT ? 
                        (<AddExpense onClick={ () => {
                                let newCards = { ...cards }
                                newCards[id] = { amount: '0', type: 0, date: new Date(), responsible: 0, quantity: 0, comments: '' }
                                setCards(newCards)
                                setid(id + 1)
                            }} > <i className="material-icons" title="Adiconar Despesa"> add </i> </AddExpense>) : null
                    }
                    { 
                        Object.keys(cards).length ? 
                            (<SendButton> <i className="material-icons" title="Enviar Formulários"> send </i> </SendButton>) : null
                    }
                </div>
                {
                    Object.keys(cards).length ? (<Total> R$ {total} </Total>) : null
                } 
            </HeaderContainer>
            <FormsContainer>
                {  
                    Object.keys(cards).map((id, key) => { 
                        return(
                            <Cards key={key}> 
                                <CardHeader> 
                                    <h5> Incluir Despesa </h5>
                                    <div> </div>
                                </CardHeader>
                                <Form>
                                    <DoubleForm>
                                        <DatePicker datePickerHandler={[cards, id, setCards]}/>
                                        <QuantitySelector expenseQuantityHandler={[ cards, id, setCards ]} />
                                    </DoubleForm>
                                    <DoubleForm>
                                        <TypeSelector expenseTypeHandler={[cards, id, setCards]}/>
                                        <ResponsibleSecletor expenseResponsibleHandler={[ cards, id, setCards ]} />
                                    </DoubleForm>
                                    <DoubleForm> 
                                        <AmountInput expenseAmountHandler={[ cards, id, setCards ]}/>
                                        <CommentInput expenseCommentHandler={[ cards, id, setCards ]}/>
                                    </DoubleForm>
                                </Form>
                            </Cards>
                        )
                    })
                }
            </FormsContainer>
        </ExpenseContainer>
    </>)
}

export default Expenses