import React from 'react'
import FeaturedPost from "../../components/FeaturedPost";
import { Container, Grid, Toolbar } from '@mui/material';
import PostCard from '../../components/PostCard';
import { makeStyles } from 'tss-react/mui';
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles()(() => {
  return {
      tagline:{
          fontSize: 20,
          textTransform:"uppercase",
          justifyContent: "center",
          fontFamily:"Segoe UI",
      }, 
  };
});


function Home() {
  const navigate = useNavigate();
    const startQuiz = (qname)=>{
        console.log(qname);
        localStorage.setItem("qname",qname);
        localStorage.setItem("score",0);
        localStorage.setItem("qno",1);
        localStorage.setItem("option","");
        //navigate("/quiz");
    }
  const {classes} = useStyles();
  return (
    <div>
      <Nav/>
      {/* <Button variant="contained" startIcon={<SendIcon />}>Hello World</Button> */}
      <Container>
      <Toolbar className={classes.tagline}>ONLINE QUIZ</Toolbar>
      
      <FeaturedPost />
      <br />
      <Grid container spacing={4}  >
        
            <PostCard title="Science" description="Science is the action to find out any fact regarding the natural world." image="https://img.freepik.com/free-vector/colorful-science-objects-icons-vector-set_1308-131708.jpg?w=2000" onclick={startQuiz("ccc")}/>
            <PostCard title="General Knowledge" description="GK is very useful and important in one's life. It informs us of everything " image="./gk.png" qname="GK" />
            <PostCard title="Physics" description="Physics is a branch of science. It is one of the most fundamental scientific disciplines." image="https://i.pinimg.com/736x/9f/cf/03/9fcf03460710d991aa56fe671f3e0d58.jpg" />
            <PostCard title="Chemistry" description="Chemistry is the branch of science that deals with the properties, composition." image="https://i.pinimg.com/originals/22/72/2b/22722b33f4d7e9d810c6bce2fe678128.jpg" />
      </Grid>
      </Container>
      <Foot/>
    </div>
  )
}

export default Home