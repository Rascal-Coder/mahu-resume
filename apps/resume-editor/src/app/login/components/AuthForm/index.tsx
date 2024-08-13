'use client';
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
// import { toast } from 'react-hot-toast';

// import { useRouter } from 'next/navigation';
// import { signIn, useSession } from 'next-auth/react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

import AuthSocialButton from '../AuthSocialButton';

import Form from './Form';

type Variant = 'LOGIN' | 'REGISTER';
export default function AuthForm() {
  // const router = useRouter();
  // const session = useSession();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   if (session?.status === 'authenticated') {
  //     router.push('/templates');
  //   }
  // }, [session?.status, router]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    // Axios Register
    if (variant === 'REGISTER') {
    }
    if (variant === 'LOGIN') {
      // NextAuth Sigin
    }
  };
  const socialAction = (action: 'github' | 'google') => {
    // NextAuth Social Sign in
    setIsLoading(true);
  };
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
    reset();
  }, [reset, variant]);
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <Form
          onSubmit={onSubmit}
          disabled={isLoading}
          variant={variant}
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
        ></Form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')}></AuthSocialButton>
            <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')}></AuthSocialButton>
          </div>

          <div
            className="
            flex
            gap-2
            justify-center
            text-sm
            mt-6
            px-2
            text-gray-500
            "
          >
            <div>{variant === 'LOGIN' ? 'New to Messenger' : ' Already have a account ?'}</div>
            <div onClick={toggleVariant} className="underline cursor-pointer hover:text-sky-500">
              {variant === 'LOGIN' ? 'Create an account' : 'Login in'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
