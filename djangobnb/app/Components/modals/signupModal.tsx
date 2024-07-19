'use client'
import Modal from './modal'
import { useState } from 'react'
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '../forms/CustomButton'

const SignupModal = () => {
  const SignupModal = useSignupModal()

  const content = (
    <>
      <form className="space-y-4">
        {' '}
        <input
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Your email"
        />
        <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Your password"
        />
         <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
          placeholder="Repeat password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          {' '}
          The error message
        </div>
        <CustomButton label="Submit" onClick={() => console.log('clicked ')} />
      </form>
    </>
  )
  return (
    <Modal
      isOpen={SignupModal.isOpen}
      close={SignupModal.close}
      label="Log in"
      content={content}
    />
  )
}

export default SignupModal
