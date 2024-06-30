import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CardProps = {
    label: string, 
    icon: LucideIcon,
    amount: string,
    description: string
};

export function CardComponent(props: CardProps) {
  return (
    <CardContent>
        <div className='flex justify-between gap-2'>
            {/* Label */}
            <p className="text-sm">{ props.label }</p>
            {/* Icon */}
            <props.icon className="h-4 w-4 text-gray-400"/>
        </div>
        <div className='flex flex-col gap-1'>
            {/* Amount */}
            <h2 className="font-2xl font-semibold">{ props.amount }</h2>
            {/* Description */}
            <p className="text-xs text-gray-500">{ props.description }</p>
        </div>
    </CardContent>
  )
};

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>): React.ReactNode{
    return(
        <div {...props} className={cn("w-full flex flex-col gap-3 rounded-xl border p-5 shadow", props.className)}/>
    )
}