'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  

export const Avatar = () => {
  return (
    <div>
    <Avatar>
     <AvatarImage src="https://github.com/shadcn.png" />
     <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  </div>
  )
}
