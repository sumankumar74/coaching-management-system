import User from '@/app/models/User';
import ConnectDb from '@/app/utils/ConnectDb';
import { DataTable } from '../ui/data-table';
import { columns } from '../courses/coulumn';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const page = async () => {
    await ConnectDb();
    let users = await User.find({status:true});
    users = JSON.parse(JSON.stringify(users));
  return (
    <div className='px-10 w-full py-5 flex flex-col '>
      <div className='flex mb-5'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>New Admission</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        <h2 className='text-2xl text-slate-800 font-medium mb-5'>Manage Admissions ({users.length})</h2>
        <DataTable columns={columns} data={users}/>
    </div>
  )
}

export default page