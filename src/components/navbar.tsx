import 'react'
import Link from 'next/link';

const Navbar = () => {

    return(
        <div className='flex justify-between mx-4 mt-3'>
            <div>
                <h1 className='text-3xl'><Link href={"/"}>C2R</Link></h1>
            </div>

            <div className='flex gap-[2rem] text-2xl'>
                <div className='hover:underline'> 
                    <Link href={"/products"}>Products</Link>
                </div>

                <div className='hover:underline'>
                    <Link href={"/services"}>Services</Link>
                </div>
                <div className='hover:underline'>
                    <Link href={"/career"}>Career</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;