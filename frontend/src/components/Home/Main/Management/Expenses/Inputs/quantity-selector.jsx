import React from 'react'
import { 
    makeStyles,
    withStyles, 
    createMuiTheme, 
    MuiThemeProvider 
} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({ 
    root: { 
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: { 
        margin: theme.spacing(0),
        minWidth: 120,
        width: '100%'
    },
    selectEmpty: { 
        marginTop: theme.spacing(0)
    },
    input: { 
        fontSize: '10px'
    }
}))

function QuantitySelector({ expenseQuantityHandler }) { 
    const [ cards, id, setter ] = expenseQuantityHandler
    const classes = useStyles()

    const handleChange = event => { 
        setter(oldValues => ({
            ...oldValues,
            [id]: {...oldValues[id], quantity: event.target.value }
        }))
    }
    
    return (
        <form className={ classes.root }> 
            <FormControl className={ classes.formControl }>
                <InputLabel htmlFor='expense-quantity'> Nº Notas </InputLabel>
                <Select
                    value={cards[id]['quantity']}
                    onChange={ handleChange }
                    inputProps={{
                        name: 'quantity',
                        id: 'expense-quantity'
                    }}
                    className={ classes.input }
                > 
                    <MenuItem value={0}> 0 </MenuItem>
                    <MenuItem value={1}> 1 </MenuItem>
                    <MenuItem value={2}> 2 </MenuItem>
                    <MenuItem value={3}> 3 </MenuItem>
                    <MenuItem value={4}> 4 </MenuItem>
                    <MenuItem value={5}> 5 </MenuItem>
                </Select>
            </FormControl>
        </form>
    )
}

export default QuantitySelector