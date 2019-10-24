import React, { useState } from 'react'

import DatePicker from './Inputs/date-selector'
import TypeSelector from './Inputs/type-selector'
import QuantitySelector from './Inputs/quantity-selector'
import StoreSelector from './Inputs/store-selector'
import AmountInput from './Inputs/amount-input'
import CommentInput from './Inputs/comment-input'
import { InsertExpenses } from 'Api/api-expenses'

import { 
    ExpenseContainer,
    HeaderContainer,
    FormsContainer,
    Cards,
    CardHeader,
    Form,
    DoubleForm,
    AddExpense,
    SendButton,
    Total
} from './styles'

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

   const handleSubmit = () => { 
       let payload = Object.keys(cards).reduce((acc, card) => { 
            return [...acc, cards[card]]
       }, [])

       InsertExpenses(payload).then(res => console.log(res))
       setCards({})
       setid(0)
   }

   const addNewCard = () => { 
        let newCards = { ...cards }
        newCards[id] = { amount: '0', type: 'Refeição/Marmitex', date: new Date(), store: 0, quantity: 0, comments: " " }
        setCards(newCards)
        setid(id + 1)
   }

   return (<>
        <ExpenseContainer>
            <HeaderContainer> 
                <div style={{ display: 'flex' }}>
                    <h4> Despesas Diárias </h4>
                    {
                        Object.keys(cards).length < CARD_LIMIT ? 
                        (<AddExpense onClick={ addNewCard }> <i className="material-icons" title="Adiconar Despesa"> add </i> </AddExpense>) : null
                    }
                    { 
                        Object.keys(cards).length ? 
                            (<SendButton onClick={ handleSubmit }> 
                                <i className="material-icons" title="Enviar Formulários"> send </i> 
                            </SendButton>) : null
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
                                        <StoreSelector expenseStoreHandler={[ cards, id, setCards ]} />
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