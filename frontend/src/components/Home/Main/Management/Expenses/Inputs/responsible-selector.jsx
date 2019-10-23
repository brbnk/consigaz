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
import { GetAllEmployeesToMap } from 'Api/api-employees'

const useStyles = makeStyles(theme => ({ 
    root: { 
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: { 
        margin: theme.spacing(0),
        minWidth: 120,
        width: '100%',
        contain: 'size'
    },
    selectEmpty: { 
        marginTop: theme.spacing(0)
    },
    input: { 
        fontSize: '10px'
    }
}))

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

function ResponsibleSelector({ expenseResponsibleHandler }) { 
    const [ cards, id, setter ] = expenseResponsibleHandler
    const [ employees, setEmployees ] = React.useState({})
    const classes = useStyles()

    React.useEffect(() => { 
        (async () => { 
            let { employees } = await GetAllEmployeesToMap()
            let map = employees.reduce((acc, employee) => { 
                acc[employee._id] = employee.name
                return acc
            }, {})

            setEmployees(map)
        })()
    }, [])

    const handleChange = event => { 
        setter(oldValues => ({
            ...oldValues,
            [id]: {...oldValues[id], responsible: event.target.value }
        }))
    }
    
    return (
        <MuiThemeProvider theme={theme}>
            <FormControl className={ classes.formControl }>
                <InputLabel htmlFor='expense-responsible'> Responsável </InputLabel>
                <Select
                    value={cards[id]['responsible']}
                    onChange={ handleChange }
                    inputProps={{
                        name: 'responsible',
                        id: 'expense-responsible'
                    }}
                    className={ classes.input }
                > 
                    {
                        Object.keys(employees).map((_id, key) => {
                            return (
                                <MenuItem value={_id} key={key}> {employees[_id]} </MenuItem>
                            )   
                        })
                    }
                    <MenuItem value={0}> - </MenuItem>
                </Select>
            </FormControl>
        </MuiThemeProvider>
    )
}

export default withStyles(null, { withTheme: true })(ResponsibleSelector)