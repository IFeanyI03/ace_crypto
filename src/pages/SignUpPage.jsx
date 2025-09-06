import React from 'react';
import AuthLayout from '../components/AuthLayout';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;