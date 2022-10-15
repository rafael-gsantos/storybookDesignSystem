import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}


export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-4 px-3 bg-pink-300 rounded font-semibold text-purple-300 w-full transition-colors hover:bg-pink-400 focus:ring-2 ring-gray-500',
            )}
        >
            {children}
        </Comp>
    )
}