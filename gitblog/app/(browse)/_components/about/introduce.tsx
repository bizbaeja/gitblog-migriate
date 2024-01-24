
import Link from "next/link"
import Image from "next/image"

export const IntroductSection = () => {
  
    return(
        
        <div className="relative h-full w-full mt-40">
        <div className="p-4">
          <h3 className="text-xl font-bold">Last works</h3>
        </div>
        
        <div className="p-4">
          <div className=" flex space-y-4 space-x-20">
       
            <div>
                <embed src="https://github-readme-stats.vercel.app/api?username=bizbaeja&show_icons=true&theme=radical"></embed>
            </div>
            <div>
              <embed src="https://github-readme-stats.vercel.app/api/top-langs/?username=bizbaeja&layout=compact&theme=dracula"></embed>
            </div>

          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex  justify-items-center  space-y-10">
       
            <div className="flex  items-center space-x-40">
               <div className="">
                 <p className="font-semibold">Channel</p>
                 <ul >
                    <li>Blog : <Link href="https://gitblog-two.vercel.app/">Bizbaeja Blog</Link> </li>
                    <li>GitHub : <Link href="https://github.com/bizbaeja">Bizbaeja Github</Link> </li>
                 </ul>
               </div>
               <div >
                <p className="font-semibold">Contact</p> 
                <ul>
                    <li>Email : bjgbjg112@gmail.com </li>
                    <li>Phone : 010 - 2306 - 7267 </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="font-semibold">Tech Stack</div>

            </div>
            <div className="flex space-x-4">
              {/* 기술 아이콘 */}
              <Image src="/icons/html.png"  width={40} height={40} alt="HTML5" />
              <Image src="/icons/css.png"  width={40} height={40} alt="CSS3" />
              <Image src="/icons/js.png"  width={40} height={40} alt="JavaScript" />
              <Image src="/icons/react.png"  width={40}height={40} alt="React" />
              <Image src="/icons/ts.png"  width={40}height={40} alt="TypeScript" />
              <Image src="/icons/nextjs.png"  width={100}height={40} alt="NextJS" />
            </div>
          </div>
        </div>
      
      
      </div>
    )
}
