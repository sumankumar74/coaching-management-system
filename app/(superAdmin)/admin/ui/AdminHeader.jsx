"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminHeader = () => {
  const router = useRouter();
  const handleLogout = async() => {
    await signOut();
    router.push("/")
  }
    return (
      <header className=" py-4 px-5 w-full">
        <div className="container mx-auto px-4 flex justify-between items-center ">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          <nav className="flex space-x-4">
                <a href="/" className="hover:text-green-500">Home</a>
               <button onClick={handleLogout} className=" hover:text-red-500" >Logout</button>
              
          </nav>
        </div>
      </header>
    );
  };
  
  export default AdminHeader;
  