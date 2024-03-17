import { colorCard } from '@/constants'
import React from 'react'
import { Button } from './ui/button'

const MyGrid = () => {
    return (
        <div className="border border-black grid grid-cols-12 gap-1 py-10 px-10">
            {/* first */}
            <div className="h-[40vh] col-span-2">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div className="rounded-lg bg-green-300 border border-none grid row-span-7">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                        <p>wells cargo checking</p>
                    </div>
                </div>
            </div>
            {/* second */}
            <div className="h-[40vh] col-span-1">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div className="rounded-lg bg-gray-200 border border-none grid row-span-1 gap-1">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                        <p>wells cargo checking</p>
                    </div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-10 gap-1"></div>
                </div>
            </div>
            {/* third */}
            <div className="h-[40vh] col-span-2">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div className="rounded-lg bg-pink-300  border border-none grid row-span-4 gap-1">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                        <p>wells cargo checking</p>
                    </div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                </div>
            </div>
            {/* fourth */}
            <div className="h-[40vh] col-span-1">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg  border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg  border border-none grid row-span-1 gap-1"></div>
                    <div className="rounded-lg bg-red-300 border border-none grid row-span-1 gap-1">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                    </div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg  border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg  border border-none grid row-span-8 gap-1"></div>
                </div>
            </div>
            {/* fifth */}
            <div className="h-[40vh] col-span-1">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div className="rounded-lg bg-blue-300 border border-none grid row-span-1 gap-1">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                    </div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-2 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-3 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-5 gap-1"></div>

                </div>
            </div>
            {/* sixth */}
            <div className="h-[40vh] col-span-3">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-1 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-2 gap-1"></div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-3 gap-1"></div>
                    <div className="rounded-lg bg-purple-300 border border-none grid row-span-6 gap-1">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                        <p>wells cargo checking</p>
                    </div>
                </div>
            </div>
            {/* seventh */}
            <div className="h-[40vh] col-span-2">
                <div className="h-[40vh] grid grid-rows-12 gap-1">
                    <div className="rounded-lg bg-yellow-300 border border-none grid row-span-5 gap-1">
                        <Button className='bg-white text-black w-12 h-8 m-10'>13.7%</Button>
                        <p>wells cargo checking</p>
                    </div>
                    <div style={{ backgroundColor: colorCard }} className="rounded-lg border border-none grid row-span-7 gap-1"></div>
                </div>
            </div>
        </div>
    )
}

export default MyGrid