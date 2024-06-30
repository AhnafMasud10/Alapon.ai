'use client';
import { Button } from '@/app/components/Button';
import Input from '@/app/components/inputs/input';
import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

const AuthForm = () => {
  type Variant = 'LOGIN' | 'REGISTER';
  
  const[ variant, setVariant] = useState<Variant>('LOGIN');
  const[isLoading,setIsLoading] = useState(false);
  const toggleVariant = useCallback(() =>{ //useCallback optimises. login to register happens once but it doesnt need to go from register to login.
    if(variant === 'LOGIN'){
      setVariant('REGISTER')
    }else {
      setVariant('LOGIN')
    }
  },[variant])

  const {
    register,
    handleSubmit,
    formState: { 
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data)=> {
    setIsLoading(true);
    if(variant=== 'REGISTER'){
      //axios register
    }
    if (variant==='LOGIN'){
      //next auth sign in
    }
  }

  const socialAction = (action:string) => {
    setIsLoading(true);
    //nextauth social sign in
  }


    return (
    <div className='
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md'>
        <div className='bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        '>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            {variant === 'REGISTER' && (
            <Input 
              id="name"
              label="Name" 
              register={register}
              errors={errors}/>

          )}
          <Input 
              id="email"
              label="Email address" 
              type="email"
              register={register}
              errors={errors}/>

          <Input 
              id="password"
              label="Password" 
              type="password"
              register={register}
              errors={errors}/>

            <div>
              <Button
                disabled={isLoading}
                fullwidth
                type="submit"
                

              >
                {variant=== 'LOGIN' ? 'Sign In' : 'Register'}
              </Button>
            </div>
          </form>

        </div>
    </div>
  )
}
export default AuthForm;
