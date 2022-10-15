import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';


export interface HeadingProps{
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    asChild?: boolean;
}


export function Heading({ size = 'md', children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot: 'h2';

    return(
        <Comp className={clsx(
            'text-gray-500 font-bold font-sans', { 
                'text-h1': size === 'h1',
                'text-h2': size === 'h2',
                'text-h3': size === 'h3',
                'text-h4': size === 'h4',
                'text-h5': size === 'h5',
                'text-h6': size === 'h6',
            } 
        )}
        >
            {children}
        </Comp>
    )
}