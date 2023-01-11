import React from 'react';
import Image from 'next/image';
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ArrowForwardIosRounded } from '@mui/icons-material';
import Head from 'next/head';

const Home = () => {
    return (
      <div>
        <Head>
          <title>LinkedIn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="flex justify-around items-center py-4">
          <div className="relative w-36 h-10">
            <Image
              src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex items-center sm:divide-x divide-gray-300">
            <div className="hidden sm:flex space-x-8 pr-4">
              <HeaderLink Icon={ExploreIcon} text="Discover" />
              <HeaderLink Icon={GroupIcon} text="People" />
              <HeaderLink Icon={OndemandVideoIcon} text="Learning" />
              <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
            </div>
            <div className="pl-4">
              <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5">
                Sign in
              </button>
            </div>
          </div>
        </header>
        <main className='flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto'>
          <div className='space-y-6 xl:space-y-10'>
            <h1 className='text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0'>
              Welcome to your professional community
            </h1>
            <div className='space-y-4'>
              <div className='intent'>
                <h2 className='text-xl'>Search for a job</h2>
                <ArrowForwardIosRounded className='text-gray-700'/>
              </div>
              <div className='intent'>
                <h2 className='text-xl'>Find a person you know</h2>
                <ArrowForwardIosRounded className='text-gray-700' />
              </div>
              <div className='intent'>
                <h2 className='text-xl'>Learn a new skill</h2>
                <ArrowForwardIosRounded className='text-gray-700' />
              </div>
            </div>

            <div className='relative xl:absolute w-50 h-50 xl:w-[650px] xl:h-[525px] top-14 right-5'>
              <Image src="/main.svg" fill priority/>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Home;
