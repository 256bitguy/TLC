import React from 'react';
import Navbar from '../Navbar';
import Post from './shared/Post';
import About from './about/About';
import BorderBet from '../../component/BorderBet';
import Members from './members/Members';
import Footer from '../Footer';
import { TeamContext, TeamProvider } from './TeamProvider';
import { Typography } from '@mui/material';

function Team() {
 
  return (
    <TeamProvider>
      <div
        style={{
          background: "#fbfddf"
        }}
      >
         <Navbar/>
        <Post asdf={0}/>
        <About/>
        <Members/>
        <Footer/>
      </div>
    </TeamProvider>
  );
}

export default Team;
