import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  const StyledImgNav = styled("img")(() => ({
    width: "50px",
  }));

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
  }));

  return (
    <>
      <AppBar position="relative">
        <StyledToolbar>
          <MenuItem>
            <StyledImgNav src={Logo} />
          </MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
