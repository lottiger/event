import React from 'react'

import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function LandingPage() {
  return (
    <div> 
       <div>
      <div className="container mx-auto flex items-center justify-between py-4">
  
       
     
      </div>

      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <h1 className="text-6xl font-bold">Welcome to the secret events</h1>
        <p className="text-muted-foreground mb-6">The most epic events in modern time, dare to dive into the new era of entertainment</p>
        <SignedOut>
            <SignInButton mode="modal">
          <Button>
            Sign in

          </Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/events">
            <Button> ENTER </Button>
            </Link>
        </SignedIn>
      </div>
    </div>
    </div>
  )
}

export default LandingPage