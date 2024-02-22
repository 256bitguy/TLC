 import React, { useContext } from 'react';

import { TeamProvider,TeamContext } from './TeamProvider'
import Team from './Team'

function TeamWala() {
  return (
     <TeamProvider>
        <Team/>
     </TeamProvider>
  )
}

export default TeamWala