import React from 'react';
import Navbar from './Navbar';
import HImg from '../Assets/HImg.jpeg';

const Home = () => {
  return (
    <div className='w-full'>
     <Navbar/>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Fluid monitoring</p>
              </div>
              <p className="text-sm font-medium">Try it→</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Smart Fluid Monitoring in Healthcare
            </h1>
            <p className="mt-8 text-lg text-gray-700">
            Revolutionizing healthcare with real-time fluid monitoring. Utilizing IoT and advanced sensors, it accurately measures fluid intake and output, eliminating errors and enabling early intervention. Integrated with electronic health records, FluidTrack optimizes care and improves patient outcomes.
            </p>
          </div>
          <div className="relative lg:col-span-5 xl:col-span-6 pt-20">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={HImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
