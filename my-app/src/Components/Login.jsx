import React from 'react';
import { Avatar, Grid, Paper, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const Login = () => {
    // Define paperStyle with correct property names
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 280,
        margin: "20px auto"
    };
    const avtarStyle = {
        backgroundColor: 'green'
    }

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='User Name' placeholder='Enter User Name' fullWidth required />
                    <TextField label='Password' placeholder='Enter Password' type='password' required />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                    <button variant="contained">Sign In</button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
