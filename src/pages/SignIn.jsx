import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getErrorMessage } from '../api/apiClient';
import Loader from '../components/Loader';
import { FiMail, FiLock } from 'react-icons/fi';
import { authAPI } from '../api/endPoints';

const signinSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const SignIn = () => {
  const navigate = useNavigate();

  const signinMutation = useMutation({
    mutationFn: authAPI.signin,
    onSuccess: (response) => {
      const { token, user } = response.data;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('userRole', user.role);
      toast.success('Logged In Successfully');
      navigate('/');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-orange-600 font-bold text-3xl text-center mb-8">
          Sign In
        </h1>

        <Formik
          validationSchema={signinSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => signinMutation.mutate(values)}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className="space-y-6">
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
                disabled={signinMutation.isLoading}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {signinMutation.isLoading ? <Loader /> : 'Sign In'}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;