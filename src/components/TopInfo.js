"use client"
import { Button, Card } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const TopInfo = ({totalPharamacies,}) => {
  return (
    <div className='w-2/5 p-2'>
    <Card >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     Total Pharamacies: {}
    </h5>
    <span className='flex  space-x-2'>
    <Link href=''  className='w-2/5'><Button>Add</Button></Link>
    <Button className='w-2/5'>Update</Button>
    </span>
  </Card>
  </div>
  )
}

export default TopInfo