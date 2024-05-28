'use client'

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { SignOutButton, SignedIn } from "@clerk/nextjs"

export const Header = () => {
  
    return (
    <div>
        <ModeToggle />
        <SignedIn>
            <SignOutButton mode="modal">
          <Button>
            Sign out

          </Button>
            </SignOutButton>
            </SignedIn>
    </div>
  )
}
