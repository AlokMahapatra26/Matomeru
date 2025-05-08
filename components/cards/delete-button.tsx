"use client"
import React, { useTransition } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { useState } from 'react'
import { deleteResumeAction } from '@/actions/resume-actions'
import {toast} from 'sonner'

interface DeleteButtonProp {
  resumeId : string,
}

export default function DeleteButton({resumeId}:DeleteButtonProp) {


  const [open , setOpen] = useState(false);
  const [isPending , startTransition] = useTransition()


  const handleDelete = async () => {
    startTransition(async() => {
      const result = await deleteResumeAction({
        resumeId});
    if(!result.success){
      toast("Deletion faild")
    }
    })
    
    setOpen(false)
  };


  return (


    <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
  <Button variant={'ghost'} size="icon" className='bg-rose-500 text-white rounded-md cursor-pointer hover:bg-rose-600 hover:text-white'>
      <Trash2 className='w-4 h-4'/>
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Summary</DialogTitle>
      <DialogDescription>
        Are you sure you wanna delete this resume
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
    <Button variant={'ghost'}  className='  rounded-md cursor-pointer ' onClick={()=>setOpen(false)}>
      Cancel
    </Button>
    <Button variant={'destructive'}  className=' text-white rounded-md cursor-pointer hover:bg-rose-600 hover:text-white' onClick={()=>handleDelete()}>
      {isPending ? 'Deleting...' : 'Delete'}
    </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

   
  )
}

