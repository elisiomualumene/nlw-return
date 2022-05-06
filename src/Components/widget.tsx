import { ChatTeardropDots as Chat } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './widgetForm'


export const Widget = () => {

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end'>

            {/* {visibility ? <p>Hello World</p> : null} */}
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <Chat className='w-6 h-6'/>
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Fedback
                </span>
            </Popover.Button>
        </Popover>
    )
}