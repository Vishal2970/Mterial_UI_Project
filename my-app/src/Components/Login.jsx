import React from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    const paperStyle = {
        padding: '20px',
        height: '70vh',
        width: '300px',
        margin: '20px auto',
        textAlign: 'center'
    };

    const avatarStyle = {
        backgroundColor: 'green',
        marginBottom: '20px'
    };

    const textFieldStyle = {
        marginBottom: '15px'
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label="User Name" placeholder="Enter User Name" fullWidth required style={textFieldStyle} />

                    <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required style={textFieldStyle} />

                    <FormControlLabel control={<Checkbox />} label="Remember me" style={{ marginBottom: '20px' }} />

                    <Button variant="contained" color="primary" fullWidth >Sign In</Button>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Login;
