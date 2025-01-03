import React, { useState } from 'react';
import { Card, CardContent, Snackbar, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import '../assets/styles/registration.css';

const RegistrationPage = () => {
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 

  const validate = () => {
    const newErrors = {};

    if (!register.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!register.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!register.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(register.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!register.password) {
      newErrors.password = 'Password is required';
    } else if (register.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (register.password !== register.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8082/user/register', register);
      console.log('Registration successful:', response.data);
      setSnackbarMessage('Registration successful!');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error('There was an error registering:', error);
      setSnackbarMessage('Registration failed. Please try again.');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className='registration-container'>
      <div className='reg-heading'>
        <p>Register Here</p>
      </div>
      <Card className='register' elevation={6}>
        <CardContent>
          <form className='form-control' onSubmit={handleSubmit}>
            <div className='name-section'>
              <TextField
                id="firstName"
                label="First Name"
                variant="standard"
                name="firstName"
                value={register.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
              <TextField
                id="lastName"
                label="Last Name"
                variant="standard"
                name="lastName"
                value={register.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </div>
            <div className='email-section'>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                fullWidth
                name="email"
                value={register.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                fullWidth
                name="password"
                value={register.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="standard"
                fullWidth
                name="confirmPassword"
                value={register.confirmPassword}
                onChange={handleChange}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button className='submit-btn' type="submit">SIGN UP</button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegistrationPage;
