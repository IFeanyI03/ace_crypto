import React from 'react';
import AuthLayout from '../components/AuthLayout';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;