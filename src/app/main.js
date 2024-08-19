import React from "react";
import ListInfo from './lists/listInfo';

export default function App() {
    let btns = ListInfo.links.map((e) => {
        return (
            <button key={e.name} className='flex transform ml-2 lg:ml-4 mr-2 lg:mr-4 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-100' onClick={() => {window.open(e.url, '_blank')}}>
                <svg className='w-12 lg:w-20' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    {e.logo}
                </svg>
            </button>
        )
    });
    return (
        <div className="flex flex-col bg-emerald-900 w-screen h-screen justify-center items-center select-none">
            <p className='font-normal text-3xl lg:text-6xl text-slate-100'>{ListInfo.name}</p>
            <p className='font-light text-lg lg:text-3xl mt-4 lg:mt-10 text-slate-100'>email:&nbsp;
                <span className='cursor-pointer' onClick={() => {window.open(`mailto: ${ListInfo.email}`, '_blank')}}>{ListInfo.email}</span>
            </p>
            <div className='flex flex-row mt-4 lg:mt-10'>
                {btns}
            </div>
        </div>
    )
}