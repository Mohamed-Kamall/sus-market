import React from 'react'
import { List, ListItem ,ListItemText,Typography } from '@material-ui/core'

const Review = ({token}) => {
    return (
        <>
            <Typography variant="h5" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {token.live.line_items.map((prod)=>(
                    <ListItem style={{padding: '10px 0'}} key={prod.name}>
                        <ListItemText primary={prod.name} secondary={`Quantity : ${prod.quantity}`}/>
                        <Typography variant='body2'>{prod.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem alignItems='flex-start' divider={true}>
                    <ListItemText primary="Total" secondary={`${token.live.subtotal.formatted_with_symbol}`} secondaryTypographyProps={{variant:'subtitle1',color:'primary' ,style:{fontWeight:700}}}/>
                </ListItem>
            </List>
        </>
    )
}

export default Review
