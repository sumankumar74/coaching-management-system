import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const Footer = () => {
  return (
    <Card className="bg-gray-900 text-white">
      <CardContent className="flex flex-col  items-center justify-between">
        <CardHeader className="text-2xl font-semibold">Code With Sadique</CardHeader>
        <CardTitle className=" text-lg font-medium ">Empowering coaches and learners</CardTitle>
        <CardFooter className="mt-5 " >
          <Link href="" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> About </Link>
          <Link href="" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> Services </Link>
          <Link href="" className="flex  font-medium text-md px-4 text-gray-400 hover:text-white transition duration-300 ease-in-out"> Contact </Link>
        </CardFooter>
      </CardContent>
    </Card>

  )
}

export default Footer