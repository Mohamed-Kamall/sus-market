import React from 'react'
import { TextField,Grid} from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

export default function FormInput({name,label}) {
    const { control } = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                defaultValue=""
                control={control}
                render = {({ field : { value ,onChange} })=> (
                    <TextField
                        value={value}
                        fullWidth
                        label={label}
                        onChange={onChange}
                        required
                    />)}
            />
        </Grid>
    )
}
