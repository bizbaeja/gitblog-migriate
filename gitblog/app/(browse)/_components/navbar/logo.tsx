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
        <div className='flex flex-col items-center gap-y-4'>
            <div className='bg-white rounded-full p-1'>
                <Image
                 src='/seaotter.jpeg'
                 width={80} 
                 height={80}
                alt='Gaemehub'/>
            </div>
            <div className='flex flex-col items-center'>
                <p className={cn(
                    "text-xl font-semibold",
                    font.className
                )}>
                    Hello
                </p>
                <p className={cn("text-sm text-muted-foreground",font.className)}>
                    Let&apos;s Play
                </p>
            </div>
        </div>
        </Link>
    )
}