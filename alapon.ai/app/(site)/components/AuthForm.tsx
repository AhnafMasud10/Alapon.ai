'use client';
import { Button } from '@/app/components/Button';
import Input from '@/app/components/inputs/input';
import React, { useCallback, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const AuthForm = () => {
  type Variant = 'LOGIN' | 'REGISTER';
  
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      // axios register logic
    }
    if (variant === 'LOGIN') {
      // next auth sign in logic
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // nextauth social sign in logic
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input 
              id="name"
              label="Name" 
              register={register}
              errors={errors}
            />
          )}
          <Input 
            id="email"
            label="Email address" 
            type="email"
            register={register}
            errors={errors}
          />
          <Input 
            id="password"
            label="Password" 
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullwidth
              type="submit"
            >
              {variant === 'LOGIN' ? 'Sign In' : 'Register'}
            </Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center '>
              <div className='w-full border-t border-gray-300'/>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>
          <div className='mt-6 flex
          gap-2'>
            <AuthSocialButton icon={BsGithub} onClick={()=>socialAction('github')}/>
            <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
          </div>
        </div>
        <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
          <div>
            {variant === 'LOGIN' ? 'New to Alapon?' : ' Already have an account?'}
            <span
              onClick={toggleVariant}
              className='
              underline
              text-blue-500
              cursor-pointer
            
            '>
              {variant === 'LOGIN' ? ' Create an account' : ' Login'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;