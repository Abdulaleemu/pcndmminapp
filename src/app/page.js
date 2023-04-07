import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <div className="h-screen w-screen ">

<div className='h-full w-full bg-gray-500 flex flex-col sm:flex-row md:flex-row  '>
  {/* Login Form */}
  <div className='h-full w-1/3 bg-white flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-semibold '>Admin Sign In</h1>
    <div className='w-1/2 h-1/2'>
    <form className="mt-6">
              <div className="mb-2">
                  <label
                      for="email"
                      className="block text-sm font-semibold text-gray-800"
                  >
                       UserName
                  </label>
                  <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="password"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Password
                  </label>
                  <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <a
                  href="#"
                  className="text-xs text-sky-700 hover:underline"
              >
                  Forget Password?
              </a>
              <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-600 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-purple-600">
                      Login
                  </button>
              </div>
          </form>
    </div>
  </div>
  {/* Logo Side */}
  <div className='h-full w-2/3 flex flex-col items-center justify-center bg-sky-500'>
    <div className='h-[300px] w-[300px] bg-sky-300 mb-11 rounded-full flex items-center justify-center'>
      <Image 
      height={200}
      width={200}
      src="/pcnlogo.png"
      className='rounded-full' />
                </div>
    <p className='w-2/3 text-lg text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>

</div>

</div>
    </main>
  )
}
