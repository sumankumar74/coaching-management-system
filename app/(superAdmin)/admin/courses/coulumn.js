"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { formatPrice } from "@/lib/format"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"

export const columns =[
    {
        accessorKey:"title",
        header:({column})=>{
            return <Button variant="ghost" onClick={()=>column.toggleSorting(column.IsSorted()==="asc")}>
                Title
                <ArrowUpDown className="ml-2 w-4 h-4"/>
            </Button>
        },
    },
    {
        accessorKey:"description",
        header:"Description",
    },
    {
        accessorKey:"fee",
        header:({column})=>{
            return <Button variant="ghost" onClick={()=>column.toggleSorting(column.IsSorted()==="asc")}>
                Fee
                <ArrowUpDown className="ml-2 w-4 h-4"/>
            </Button>
        },
        cell:({row})=>{
            const price = parseFloat(row.getValue("fee")|| 0);
            
            return <div>{formatPrice(price)}</div>
        }
    },
    {
        accessorKey:"instructor",
        header:"Instructor"
    },
    {
        accessorKey:"duration",
        header:({column})=>{
            return <Button variant="ghost" onClick={()=>column.toggleSorting(column.IsSorted()==="asc")}>
                Duration
                <ArrowUpDown className="ml-2 w-4 h-4"/>
            </Button>
        },
    },
    {
        accessorKey:"isPublished",
        header:({column})=>{
            return(
                <Button></Button>
            )
        }
    },
    {
        id:"Actions",
        header:"Action",
        cell:({row})=>{
            const {id}= row.original;
            return(
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-4 w-4 p-0">
                            <MoreHorizontal/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link href={`/admin/course/${id}`} >
                            <DropdownMenuItem>
                                <Pencil className="w-4 h-4"/>

                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]