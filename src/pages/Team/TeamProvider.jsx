import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [memcard, setMemcard] = useState([]);
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState({
    "id": 0,
    "name": "Vivek Raj Srivastava",
    "branch": "B Tech",
    "post": "Secretary",
    "message": "Hello team, there is nothing special about me.",
    "src": "https://github.com/256bitguy/images/blob/main/store/vivek.jpg?raw=true"
  });
  const [list,setList]=useState([]);
  useEffect(() => {
    const membersData = async () => {
      try {
        const response = await axios.get("https://ashja2909.github.io/images/image.json");
        const data = response.data;
        console.log(data.members)
        setMemcard(data.members);
      } catch (error) {
        console.log(error);
      }
    };
    membersData();
    setList(()=>memcard.filter((item) => item.id !== 0))
  }, []);
    
  const [team, setTeam] = useState({
    current: 0,
    first: {
      "id": 0,
      "name": "Vivek Raj Srivastava",
      "branch": "B Tech",
      "post": "Secretary",
      "message": "Hello team, there is nothing special about me.",
      "src": "https://github.com/256bitguy/images/blob/main/store/vivek.jpg?raw=true"
    },
    members:list,
  });

  const updatePost = (ne) => {
    const chan=memcard.filter((item)=>item.id==ne)
    setTeam((prevData) => ({
      ...prevData,
      current:ne,
      first: chan[0],
    }));
  };
  const updateMembers=(ne)=>{
    const nelist=memcard.filter((item)=>item.id!=ne)
    setMembers((prevValue)=>({
      ...prevValue,
      members:nelist
    }));
  };
 

  return (
    <TeamContext.Provider
      value={ {team,
        updatePost,
         updateMembers}
       
      }
    >
      {children}
    </TeamContext.Provider>
  );
};

export { TeamContext, TeamProvider };
