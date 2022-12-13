import * as React from 'react';
import Box from '@mui/material/Box';
import { NavLink, Outlet } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
const ConfigIotHome = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
    if(event.target.value == 2){
      navigate('/client/config/iot/lights');
    } 
     if (event.target.value == 1) {
      navigate('/client/config/iot/fans');

    }
  };
  return (
    <div>
      <div className='w-full flex items-center justify-center gap-4 p-4'>
        <div className='flex items-center gap-4'>
          {/* <NavLink
            to='/client/config/iot/fans'
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-300 p-2 px-8 font-bold text-green-600'
                : 'bg-gray-300 p-2 px-8 font-bold'
            }
          >
            Fans
          </NavLink>
          <NavLink
            to='/client/config/iot/lights'
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-300 p-2 px-8 font-bold text-green-600 shadow'
                : 'bg-gray-300 p-2 px-8 font-bold'
            }
          >
            Lights
          </NavLink> */}
        </div>
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
    </div>
  );
};
export default ConfigIotHome;
