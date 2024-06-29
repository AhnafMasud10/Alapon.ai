'use client';
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
    <div>
        className="
        mt-8  
        "
    </div>
  )
}
export default AuthForm;
