import * as React from 'react';
import Box from '@mui/material/Box';
import { NavLink, Outlet } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

const IotHome = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
    if(event.target.value == 2){
      navigate('/client/devices/iot/lights');
    } 
     if (event.target.value == 1) {
      navigate('/client/devices/iot/fans');

    }
  };
  return (
    <>
      <div className='flex justify-center gap-4'>
        {/* <NavLink
          to='/client/devices/iot/fans'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 block p-2 px-4 m-0 font-bold text-green-600 shadow'
              : 'bg-gray-300 block p-2 px-4 m-0 font-bold'
          }
        >
          Fans
        </NavLink>
        <NavLink
          to='/client/devices/iot/lights'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 block p-2 px-4 m-0 font-bold text-green-600 shadow'
              : 'bg-gray-300 block p-2 px-4 m-0 font-bold'
          }
        >
          Lights
        </NavLink> */}
      </div>

      <Box className= "ml-4"sx={{ maxWidth: 400 }}>
      <FormControl fullWidth>
        <span>Select Device Type</span>
        {/* <InputLabel className = "bg-black-600 mb-10" id="demo-simple-select-label">Device Type</InputLabel> */}
        <Select className = "bg-yellow-600"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=" Device Type"
          onChange={handleChange}
        >
  
          <MenuItem  value={1}>Fans</MenuItem>
          <MenuItem value={2}>Lights</MenuItem>
        </Select>
      </FormControl>
</Box>
      
    

      <Outlet />
    </>
  );
};
export default IotHome;
