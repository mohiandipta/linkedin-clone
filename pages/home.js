import React from 'react';
import Image from 'next/image';
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Home = () => {
    return (
      <div>
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
          </div>
        </header>
      </div>
    );
}

export default Home;
