import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'


const useStyles = makeStyles(theme => ({ 
    formControl: { 
        margin: theme.spacing(0),
        minWidth: 120,
        width: '100%',
        contain: 'style'
    },
    selectEmpty: { 
        marginTop: theme.spacing(0)
    },
    input: { 
        fontSize: '10px'
    }
}))

function TypeSelector({ expenseTypeHandler }) { 
    const [ cards, id, setter ] = expenseTypeHandler
    const [ types, setTypes ] = React.useState([
        'Refeição/Marmitex',
        'Combustível',
        'Recarga de Celular',
        'Pagamento de Água New Life',
        'Material para uso da Loja',
        'Salário',
        'Serviços/Manutenções',
        'Outros'
    ])

    const classes = useStyles()
    const handleChange = event => { 
        setter(oldValues => ({
            ...oldValues,
            [id]: {...oldValues[id], type: event.target.value }
        }))
    }
    
    return (
        <FormControl className={ classes.formControl }>
            <InputLabel htmlFor='expense-type'> Tipo </InputLabel>
            <Select
                value={cards[id]['type']}
                onChange={ handleChange }
                inputProps={{
                    name: 'expense',
                    id: 'expense-type'
                }}
                className={ classes.input }
            > 
            {
                types.map((type) => { 
                    return <MenuItem value={type} key={type}> {type} </MenuItem>
                })
            }
            </Select>
        </FormControl>
    )
}

export default TypeSelector