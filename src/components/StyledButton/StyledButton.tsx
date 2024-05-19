import { styled } from "@mui/material";
import { ReactNode } from "react";

interface SteyledButtonProps {
    children: ReactNode
}

const SteyledButton: React.FC<SteyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({theme}) => ({

    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "5px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    "&:hover": {
        backgroundColor: theme.palette.secondary.light
    }
    
      }));

    return (
      <>
        <StyledButton>
            { children }
        </StyledButton>
      </>
    )
  }
  
  export default SteyledButton
  