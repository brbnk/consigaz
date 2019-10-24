import styled from 'styled-components'

export const ExpenseContainer = styled.div`
    display: grid;
    grid-auto-rows: 50px auto;
    grid-template-columns: 1fr;
`

export const HeaderContainer = styled.div`
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

export const FormsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    max-height: 70vh;
    overflow-y: auto;
`

export const Cards = styled.div`
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

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div { 
        width: 30px;
        border-bottom: 1px solid black;
    }
`

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

export const DoubleForm = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: .5fr .5fr;
    column-gap: 10px;
    margin-top: 15px;
`

export const AddExpense = styled.span`
    background-color: #00FFD5;
`

export const SendButton = styled.span`
    background-color: #00FFD5;
`

export const Total = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    color: white;
`