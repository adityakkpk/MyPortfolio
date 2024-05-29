import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {FaNodeJs} from 'react-icons/fa'

const Technologies = () => {
  return (
    <div id='technologies' className='border-b border-neutral-800 pb-24 pt-4'>
      <h2 className='my-20 text-4xl text-center'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className='text-7xl text-black'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-7xl'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className='text-7xl text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
