// components/HomeHeader.js
"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
const HomeHeader = () => {

  const {data:session}= useSession();

  const handleLogout= async()=>{
    await signOut();
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto  py-6 flex justify-between items-center">
        <div className="flex">
          <Link href="/" className=" text-3xl border px-4 py-2 rounded-xl shadow-sm font-bold text-cyan-600 ">Code With Sadique</Link>
        </div>
        <nav className="space-x-4 flex gap-2 items-center">
          <Link href="/" className="text-gray-800 hover:text-blue-600">Home </Link>
          {/* <Link href="/services" className="text-gray-800 hover:text-blue-600">Services </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link> */}
          {
            !session && (  <> <Link href="/login" className="text-gray-800 hover:text-blue-600">Login</Link>
          <Link href="/register" className="text-gray-800 hover:text-blue-600">Register for Admission</Link></>)}
         {
          session &&(
            <div className='flex gap-2 items-center'>
            <Image src={session.user.image} alt={session.user.name} height={30} width={30} className='rounded-full' />
             <a href='#contact'  className="text-gray-800 hover:text-blue-600">{session.user.name}</a>
             <button onClick={handleLogout}  className="text-gray-800 hover:text-blue-600">Logout</button>
             </div>
          )
         }
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
