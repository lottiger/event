'use client'

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { SignOutButton, SignedIn } from "@clerk/nextjs"
import { Home, LogOut, User } from "lucide-react"
import Link from "next/link"

export const Header = () => {
  
    return (
    <div className=" container flex justify-between bg-slate-50/5 py-5">
      <ModeToggle />
       <div className="flex gap-3">
       <div className="">
       <Link href="/events">
                <Button variant="outline" size="icon">
                  <Home />
               </Button>
            </Link>
            </div>
            <div>
            <Link href="/profile">
                <Button variant="outline" size="icon">
                  <User />
               </Button>
            </Link>
            </div>
        <SignedIn>
            <SignOutButton mode="modal">
          <Button variant="outline" size="icon">
          <LogOut />
          </Button>
            </SignOutButton>
            </SignedIn>
          
            </div>
            
    </div>
  )
}
