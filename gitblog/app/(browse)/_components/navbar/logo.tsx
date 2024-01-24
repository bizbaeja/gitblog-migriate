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
          <div className='rounded-lg  border-2 border-white'>
          <div className='flex flex-col items-center'>
                <p className={cn(
                    "text-lg font-semibold p-1",
                    font.className
                )}>
                   Bizbaeja
                </p>
              
            </div>
          </div>
      
        </div>
        </Link>
    )
}