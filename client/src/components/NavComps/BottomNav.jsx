import './nav.css';

import { Grid, Button, Paper, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const BottomNav = () => {
    
    const tabFocused = (event) =>{
        event.currentTarget.classList.add("tabFocused");
        event.currentTarget.focus();
    }

    const tabBlured = (event) => {
        event.currentTarget.classList.remove("tabFocused");
    }
 
  return (
    <>
      <Grid container sx={{ position:{xs:'fixed', md:'static'} , bottom: 0, display:{md:'none'} , padding: "10px", border:'4px solid #d2d7da ' }}>
        <Grid item xs={12} sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}} >
          <HomeOutlinedIcon className='iconSize' tabindex="0" onFocus={tabFocused} onBlur={tabBlured}  />
          <AutoAwesomeMosaicOutlinedIcon id="2" tabindex="0" className='iconSize' onFocus={tabFocused} onBlur={tabBlured}  />
          <AccountCircleOutlinedIcon id="3" tabindex="0" className='iconSize' onFocus={tabFocused} onBlur={tabBlured} />
          <ShoppingCartOutlinedIcon id="4" tabindex="0" className='iconSize' onFocus={tabFocused} onBlur={tabBlured} />
        </Grid>
      </Grid>
    </>
  );
};

export default BottomNav;
