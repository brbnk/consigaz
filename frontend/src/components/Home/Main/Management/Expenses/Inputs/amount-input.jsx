import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { 
    makeStyles,
    withStyles, 
    createMuiTheme, 
    MuiThemeProvider 
 } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(0),
    },
    withoutLabel: {
        marginTop: theme.spacing(0),
    },
    textField: {
        flexBasis: 200,
    }
}));

const theme = createMuiTheme({ 
    overrides: { 
        MuiSelect: { 
            icon: { 
                marginTop: '5px'
            }
        },
        MuiTypography: { 
            body1: { 
                fontSize: '10px'
            }
        }
    }
})

function AmountInput({ expenseAmountHandler }) {
    const classes = useStyles();
    const [ cards, cardId, setter ] = expenseAmountHandler 
    
    const handleChange = ({ target }) => {
        let amount = target.value[0] == '0' ? target.value.slice(1) : target.value

        setter(oldValues => ({ 
            ...oldValues,
            [cardId]: {...oldValues[cardId], amount }
        }))
    }

    return (
        <MuiThemeProvider theme={theme}>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="adornment-amount"> Valor </InputLabel>
                <Input
                    id="adornment-amount"
                    value={cards[cardId]['amount']}
                    onChange={ handleChange }
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    className={classes.input}
                />
            </FormControl>
        </MuiThemeProvider>
    )
}

export default withStyles(null, { withTheme: true })(AmountInput)