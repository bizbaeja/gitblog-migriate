"use client"
import Portfolio from "@/app/portfolio/page"
import About from "@/app/about/page"
export default function Page() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-20 pt-[100px]  gap-y-4">
      <div className="h-[400px] items-center">
        <About />
      </div>
      <div>
        <Portfolio />
      </div>

    </div>
 
  )
}