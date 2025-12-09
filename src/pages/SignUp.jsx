import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getErrorMessage } from '../api/apiClient';
import Loader from '../components/Header';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { authAPI } from '../api/endPoints';

const signupSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const SignUp = () => {
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (response) => {
      console.log('Signup success response:', response);
      
      // Check if the response indicates success
      if (response.data && response.data.status === "success") {
        toast.success(response.data.message || 'Account created successfully! Please sign in.');
        navigate('/signin');
      } else {
        // Handle unexpected response format
        toast.error('Registration completed but with unexpected response format');
      }
    },
    onError: (error) => {
      console.error('Signup error:', error);
      const errorMsg = getErrorMessage(error);
      if (errorMsg) {
        toast.error(errorMsg);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-orange-600 font-bold text-3xl text-center mb-8">
          Sign Up
        </h1>

        <Formik
          validationSchema={signupSchema}
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => {
            console.log('Submitting signup form:', values);
            signupMutation.mutate(values);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className="space-y-6">
              <div>
                <div className="relative">
                  <FiUser className="absolute left-3 top-3 text-gray-400" />
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-gray-400" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-400" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                disabled={signupMutation.isLoading}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {signupMutation.isLoading ? <Loader /> : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-orange-600 hover:underline font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;