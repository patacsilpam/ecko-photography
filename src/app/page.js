import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
  return (
    <div className="h-screen bg-cover" style={{backgroundImage:"url('assets/banner.png')"}}>
      <div className='flex flex-row justify-around bg-slate-600 p-12'>
        <div className="">
          <p className='text-white'>ECKO Photography</p>
        </div>
        <div className="flex flex-row">
            <ul className='text-white flex flex-row space-x-16'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Portfolio</Link></li>
              <li><Link href="/">Packages</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>  
            <div className="md:hidden dropdown text-white">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
              </ul>
          </div>
        </div>
      </div>
  </div>
  );
}