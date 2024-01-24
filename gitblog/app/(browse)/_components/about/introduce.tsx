import Link from "next/link"


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
                    <li>Blog : <Link href="https://gitblog-two.vercel.app/">Bizbaeja's Blog</Link> </li>
                    <li>GitHub : <Link href="https://github.com/bizbaeja">Bizbaeja's Github</Link> </li>
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png" className="h-12" alt="HTML5" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" className="h-12" alt="CSS3" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="h-12" alt="JavaScript" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="h-12" alt="React" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/440px-Typescript.svg.png" className="h-12" alt="TypeScript" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/240px-Nextjs-logo.svg.png" className="h-6" alt="NextJS" />
            </div>
          </div>
        </div>
      
      
      </div>
    )
}
