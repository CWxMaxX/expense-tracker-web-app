import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from '../../assets/logo.png';

const LoginPage: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values: {name: string; email: string; password: string }) => {
            console.log(values);
        },
    });

    return (
        <Container maxWidth="sm" className="flex flex-col items-center justify-center h-screen">
            <img src={Logo} alt="logo" width={150} className='mb-5' />
            <Typography variant="h4" className="pb-6">
                Signup
            </Typography>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <div className="mb-4">
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Signup
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;