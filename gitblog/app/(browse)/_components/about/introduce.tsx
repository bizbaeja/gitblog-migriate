

export const IntroductSection = () => {
    return(
        
        <div className="relative h-full w-full mt-40">
        <div className="p-4">
          <h3 className="text-xl font-bold">Last works</h3>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
         <embed src="https://github-readme-stats.vercel.app/api?username=bizbaeja&show_icons=true&theme=radical"></embed>
        <embed src="https://github-readme-stats.vercel.app/api/top-langs/?username=bizbaeja&layout=compact&theme=dracula"></embed>
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
        <div className="absolute bottom-20 right-0 p-4">
          <img src="https://avatars.githubusercontent.com/u/75407823?v=4" className="h-24 rounded-full " alt="Profile" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <canvas id="circles"></canvas>
        </div>
      </div>
    )
}
{/* <div className="relative h-full w-full ">
<div className="card-header">
  <h3>Last works</h3>
</div>

<div className="card-content">
  <div className="projects">
    
    
    
  </div>
</div>

<div className="card-footer">
  <div className="card-footer-content">
    <div className="profile">
      <div className="profile-group">
        <div className="name">Name</div>
        <div className="job">Web developer</div>
      </div>
    </div>
    <div className="skills">
      <div className="skills-group">
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png"  width="50px" alt="" />
        </div>
        
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"  width="50px" alt="" />
        </div>
        
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"  width="50px" alt="" />
        </div>
        
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"  width="50px" alt="" />
        </div>
        
        <div className="skill">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/440px-Typescript.svg.png"  width="50px" alt="" />
        </div>
        
      </div>
    </div>
  </div>
</div>
<div className="card-img">
  <img src="https://avatars.githubusercontent.com/u/75407823?v=4" width="100px" alt="" />
</div>
<div className="canvas-container">
  <canvas id="circles"></canvas>
</div>
</div> */}