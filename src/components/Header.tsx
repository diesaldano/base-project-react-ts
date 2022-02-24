import * as React from 'react';

export default function Header(){
    return (

        <div className="mx-10 mt-8">
        
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com" target="_blank" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-8" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    {/*<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                        <li>
                            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
                                Policy</a>
                        </li>
                        <li>
                            <a href="#"
                                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                        </li>
                    </ul>*/}
                </div>
                <hr className="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8" />
        </div>
    )
}