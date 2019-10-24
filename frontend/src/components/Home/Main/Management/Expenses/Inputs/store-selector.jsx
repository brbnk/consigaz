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
import { GetStoresToMapLookup } from 'Api/api-stores'

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

function StoreSelector({ expenseStoreHandler }) { 
    const [ cards, id, setter ] = expenseStoreHandler
    const [ stores, setStore ] = React.useState({})
    const classes = useStyles()

    React.useEffect(() => { 
        (async () => { 
            let stores = await GetStoresToMapLookup()
            let map = stores.reduce((acc, store) => { 
                acc[store._id] = store.city
                return acc
            }, {})

            setStore(map)
        })()
    }, [])

    const handleChange = event => { 
        setter(oldValues => ({
            ...oldValues,
            [id]: {...oldValues[id], store: event.target.value }
        }))
    }
    
    return (
        <MuiThemeProvider theme={theme}>
            <FormControl className={ classes.formControl }>
                <InputLabel htmlFor='expense-store'> Loja </InputLabel>
                <Select
                    value={cards[id]['store']}
                    onChange={ handleChange }
                    inputProps={{
                        name: 'store',
                        id: 'expense-store'
                    }}
                    className={ classes.input }
                > 
                    {
                        Object.keys(stores).map((_id, key) => {
                            return (
                                <MenuItem value={_id} key={key}> {stores[_id]} </MenuItem>
                            )   
                        })
                    }
                    <MenuItem value={0}> - </MenuItem>
                </Select>
            </FormControl>
        </MuiThemeProvider>
    )
}

export default withStyles(null, { withTheme: true })(StoreSelector)