import { Grid, Typography, Paper } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { styled } from '@mui/material/styles';

const Typostyled = styled(Typography)(({theme}) => ({
    fontSize:'0.9rem',
    '&:hover':{
        cursor:'pointer',
        transform:'scale(1.1)',
        transitionProperty:'transform',
        transitionFunction:'ease-in-out'
    }
}))

const Header = () => {
  return (
    <>
      <Paper elevation={2} >
        <Grid
          container
          p={2}
          sx={{ alignItems: "center", justifyContent: "space-around" }}
        >
          <Grid
            item
            sx={{ display: "flex", gap: "0.5em", alignItems: "center" }}
          >
            <LocalMallOutlinedIcon />
            <Typography variant="h6">Shoping-Hub</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", fontSize: "10px", gap: "0.8em" }}>
            <Typostyled>Home</Typostyled>
            <Typostyled>Products</Typostyled>
            <Typostyled>Mens</Typostyled>
            <Typostyled>Womens</Typostyled>
            <Typostyled>Kids</Typostyled>
            <Typostyled>Footwear</Typostyled>
            <Typostyled>Accessories</Typostyled>
            <Typostyled>Search</Typostyled>
          </Grid>
          <Grid item sx={{ display: "flex", gap: "0.5em" }}>
            <ShoppingCartOutlinedIcon />
            <AccountCircleOutlinedIcon />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Header;
