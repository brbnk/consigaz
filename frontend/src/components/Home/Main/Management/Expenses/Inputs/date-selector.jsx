import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { 
    withStyles, 
    createMuiTheme, 
    MuiThemeProvider 
} from '@material-ui/core/styles'
import { 
    MuiPickersUtilsProvider,
    KeyboardDatePicker 
} from '@material-ui/pickers'


function DatePicker({ datePickerHandler }) {
    const [cards, id, setter] = datePickerHandler

    const handleChange = date => { 
        setter(oldValues => ({ 
            ...oldValues,
            [id]: { ...cards[id], date }
        }))
    }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={theme}>
                <KeyboardDatePicker 
                    margin='normal'
                    id='date-picker-dialog'
                    label='Data'
                    format='dd/MM/yyyy'
                    value={cards[id]['date']}
                    onChange={ handleChange }
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                />
            </MuiThemeProvider>
        </MuiPickersUtilsProvider>
    )   
}

const theme = createMuiTheme({ 
    overrides: { 
        MuiFormControl: { 
            marginNormal: { 
                marginTop: '0px !important',
                marginBottom: '0',
                width: '100%'
            }
        },
        MuiInput: { 
            input: { 
                fontSize: '10px !important'
            }
        },
        MuiSvgIcon: { 
            root: {     
                fontSize: '10px !important'
            }
        }
    }
})

export default withStyles(null, { withTheme: true })(DatePicker)