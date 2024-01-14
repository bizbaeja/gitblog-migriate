import Image from 'next/image';
import  { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils"
import Link from 'next/link';
const font = Poppins({
    subsets: ['latin'],
    weight: ["200","300","400","500","600", "700","800"],
})

export const Logo = () =>{
    return (
        <Link href='/'>
        <div className='flex flex-col items-center gap-y-1 ml-20'>
            <div className='bg-white rounded-full p-1'>
                <Image
                 src='/pencil.svg'
                 width={40} 
                 height={40}
                alt='blog'/>
            </div>
            <div className='flex flex-col items-center'>
                <p className={cn(
                    "text-xl font-semibold",
                    font.className
                )}>
                   Blog
                </p>
              
            </div>
        </div>
        </Link>
    )
}