import React from 'react'
import { 
    withStyles,
    createMuiTheme, 
    MuiThemeProvider 
} from '@material-ui/core/styles'
import MaterialTable from 'material-table'

function Table({ data, onAdd, onUpdate, onDelete, columns }) { 
    const [Add, SetAddEvent] = onAdd
    const [Update, SetUpdateEvent] = onUpdate
    const [Delete, SetDeleteEvent] = onDelete
    
    return( 
        <MuiThemeProvider theme={theme}>
            <MaterialTable 
                columns={columns}
                data={data}
                title=''
                options={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                        color: '#FFF',
                        fontFamily: 'inherit'
                    },
                    actionsColumnIndex: -1,
                }}
                editable={{
                    onRowAdd: (data) => Add(data, SetAddEvent),
                    onRowUpdate: (newData, oldData) => Update(newData, oldData, SetUpdateEvent),
                    onRowDelete: (data) => Delete(data)
                }}
            />
        </MuiThemeProvider>
    )
}

const theme = createMuiTheme({ 
    overrides: {
        MuiPaper: { 
            root: { 
                fontFamily: "'Montserrat', sans-serif",
                height: 'fit-content !important',
                backgroundColor: 'transparent',
            },
            elevation2: { 
                padding: '20px',
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), \ 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.7)'
            }
        },
        MuiTableRow: {
            root: {
                height: 'inherit !important',
                minHeight: 50,
                borderBottom: 'none'
            },
            head: { 
                borderBottom: '1px solid white'
            }
        },
        MuiTableCell: {
            root: {
                padding: '10px 22px',
                borderBottom: 'none'
            },
            body: {
                fontFamily: 'inherit',
                fontSize: '.8rem',
                color: 'white'
            },
            paddingCheckbox: { 
                "&:last-child": { 
                    paddingLeft: '0',
                    paddingRight: '0',
                    padding: '0 20px !important'
                }
            }
        },
        MuiInputBase: { 
            root: { 
                color: 'white',
                fontFamily: 'inherit'
            }
        },
        MuiListItem: {
            root: {
                fontFamily: 'inherit'
            }
        },
        MuiIconButton: { 
            label: { 
                color: 'white'
            }
        },
        MuiSelect: { 
            root: { 
                color: 'white'
            },
            icon: { 
                color: 'white'
            }
        },
        MuiMenu: { 
            list: { 
                background: 'white'
            }
        },
        MuiTypography: { 
            root: {
                fontFamily: 'inherit'
            },
            caption: { 
                color: 'white'
            }
        },
        MuiInput: { 
            underline: {
                "&:after": { 
                    borderBottom: '1px solid rgba(255, 0, 0, 0.8)'
                },
                "&:hover:not(.Mui-disabled):before": { 
                    borderBottom: '1px solid rgba(255, 0, 0, 0.42)'
                },
                "&:before": { 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.42)'
                }
            }
        },
        MuiTableSortLabel: { 
            root: { 
                "&:hover": { 
                    fontWeight: 'bold',
                    color: 'white',
                }
            },
            active: { 
                fontWeight: 'bold !important',
                color: 'white !important'
            },
            iconDirectionAsc: {
                color: 'white !important'
            },
            iconDirectionDesc: {
                color: 'white !important'
            },
            icon: { 
                color: 'white',
                fontWeight: 'bold'
            }
        }
    }
})

export default withStyles(null, { withTheme: true })(Table)