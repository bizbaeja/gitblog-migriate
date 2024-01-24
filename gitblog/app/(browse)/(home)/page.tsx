"use client"
import Portfolio from "@/app/(browse)/_components/portfolio/page"
import About from "@/app/(browse)/_components/about/page"
import Footer from "@/app/(browse)/_components/footer/index"
import { ContactSection } from "../_components/contact"
export default function Page() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-20 pt-[100px]  gap-y-4">
      <div className="h-[400px] h-full items-center" id="about">
        <About />
      </div>
      <div className="h-full" id="portfolio">
        <Portfolio />
      </div>
      <div className="w-full">
      <div id="contact">
        <ContactSection />
      </div>
      <footer className="flex h-full w-full">
      <Footer />
      </footer>
      </div>
    </div>
 
  )
}