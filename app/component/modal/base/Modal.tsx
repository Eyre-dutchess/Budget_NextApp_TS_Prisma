"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import { Button } from './Button'
import { Container } from '../../genetic/Container'

interface ModalProps{
    title: string
    body: React.ReactElement
    footer?: React.ReactElement
    open: boolean
    onClose: ()=>void
    onSubmit: ()=> void
}
export const Modal: React.FC<ModalProps> = ({
    title, body, footer, open, onClose, onSubmit
}) => {
    const [showModal, setShowModal] = useState(open)
    useEffect(()=>{
        setShowModal(open)
    }, [open])
    const handleClose = useCallback(()=>{
        setShowModal(false)
        setTimeout(()=>{
            onClose()
        }, 300)
    }, [showModal])

  if(!showModal) return null;
  return (
    <div className={`z-50 w-screen h-screen fixed top-0 right-0 transition bg-zinc-800/75 flex items-center justify-center ${showModal ? "scale-100":"scale-0"}`}>
        <div className='relative w-4/5 md:w-2/3 max-w-[700px] pt-6 pb-10 px-2 flex flex-col gap-2 bg-white rounded-md shadow shadow-blue-200'>
                <Button close onClick={handleClose} icon={FaTimes} size={16}/>
            <Container>
                <h3 className='w-full border-b-2 border-blue-600/75 py-2 mt-7 text-center text-xl font-bold text-blue-800/75'>{title}</h3>
                {body}
                {footer}
                <Button confirm onClick={onSubmit} label="Confirm" />
            </Container>
        </div>
    </div>
  )
}
