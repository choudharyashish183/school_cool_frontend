import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/school.jpg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
      <StyledContainer>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <StyledTitle>Welcome to SchoolCool</StyledTitle>
              <StyledText>
                Optimize school administration, manage classes efficiently, and
                enroll students and staff. Effortlessly monitor attendance,
                evaluate performance, and offer feedback. Easily access records,
                check grades, and communicate smoothly.
              </StyledText>
              <StyledBox>
                <StyledLink to="/choose">
                  <LightPurpleButton variant="contained" fullWidth>
                    Login
                  </LightPurpleButton>
                </StyledLink>
                <StyledLink to="/chooseasguest">
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 2,
                      mb: 3,
                      color: "#7f56da",
                      borderColor: "#7f56da",
                    }}
                  >
                    Login as Guest
                  </Button>
                </StyledLink>
                <StyledText>
                  Don't have an account?{" "}
                  <Link to="/Adminregister" style={{ color: "#550080" }}>
                    Sign up
                  </Link>
                </StyledText>
              </StyledBox>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Students} alt="students" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
