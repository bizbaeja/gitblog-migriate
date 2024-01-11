import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex flex-col pl-4 gap-y-4">
      <h1>Blog</h1>
      <UserButton 
      afterSignOutUrl="/"
      />
    </div>
 
  )
}