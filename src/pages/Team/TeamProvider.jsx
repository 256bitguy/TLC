import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [memcard, setMemcard] = useState([]);
  const [list, setList] = useState([]);
  const [team, setTeam] = useState({
    current: 0,
    first: {
      "id": 0,
      "name": "Vivek Raj Srivastava",
      "branch": "B Tech",
      "post": "Secretary",
      "message": "Hello team, there is nothing special about me.",
      "src": "https://github.com/ashja2909/images/blob/main/src/vivek.jpg?raw=true"
    },
    members: [...list],
  });

  useEffect(() => {
    const membersData = async () => {
      try {
        const response = await axios.get("https://ashja2909.github.io/images/image.json");
        const data = response.data;
        
        setMemcard(data.members);
        setList(data.members); // Set the list here, not [...memcard]
      } catch (error) {
        console.log(error);
      }
    };
    membersData();
  }, []);

  const updatePost = (ne) => {
    console.log("Before updatePost:", team);
  
    const chan = memcard.find((item) => item.id === ne);
  
    console.log("After find:", chan);
  
    setTeam((prevData) => ({
      ...prevData,
      current: ne,
      first: chan,
    }));
  
    console.log("After setTeam:", team);
  };
  

  const updateMembers = (ne) => {
    console.log("Before updateMembers:", memcard);
  
    const nelist = memcard.filter((item) => item.id !== ne);
  
    console.log("After filter:", nelist);
  
    setTeam((prevValue) => ({
      ...prevValue,
      members: [...nelist],
    }));
  
    console.log("After setTeam:", team);
  };
  

  return (
    <TeamContext.Provider
      value={{
        team,
        updatePost,
        updateMembers,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export { TeamContext, TeamProvider };
