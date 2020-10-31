import React, {useState} from "react";
import "./styles/App.css";
import { Container, Paper, Box,Grid,TextField,IconButton,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup : {
    marginBottom: theme.spacing(1)
  }
}));

const App=()=> {
  const classes = useStyles();
  const userTemplate={name:"", email:"", phone:"", address:""}
  const[users,setUsers]= useState([userTemplate]); 
  const addUser=()=>{
    setUsers([...users,userTemplate])
  }

  const onChange= (e,index)=>{
    const  updatedUsers = users.map((user, i)=>index === i ?
     Object.assign(user,{[e.target.name]: e.target.value}) :user);
     setUsers(updatedUsers);
  };
  const removeUser = (index)=>{
   const filterdUsers = [...users];
   filterdUsers.splice(index, 1);
   setUsers(filterdUsers);
  }
  return (
    <Container className={classes.root}>
      <Paper component={Box}  p={4} >
        {
          users.map((user,index)=>(
          <Grid container spacing={3} key={index} className={classes.inputGroup}>
            <Grid item md={3}>
              <TextField 
              label="Name"
              placeholder="Enter Your Full Name"
              variant="outlined"
              name="name"
              onChange={e=> onChange(e,index)}
              value={user.name}
              fullWidth 
  />
            </Grid>
            <Grid item md={3}>
              <TextField 
              label="E-mail"
              placeholder="Enter Your E-mail Name"
              variant="outlined"
              name="email"
              onChange={e=> onChange(e,index)}
              value={user.email}
              fullWidth 
  />
            </Grid>
            <Grid item md={2}>
              <TextField 
              label="Phone"
              placeholder="Enter Your Phone Number"
              variant="outlined"
              name="phone"
              onChange={e=> onChange(e,index)}
              value={user.phone}
              fullWidth 
  />
            </Grid>
            <Grid item md={3}>
              <TextField 
              label="Address"
              placeholder="Enter Your Full Address"
              variant="outlined"
              name="address"
              onChange={e=> onChange(e,index)}
              value={user.address}
              fullWidth 
  />
            </Grid>
            <Grid item md={1}>
              <IconButton color="primary" onClick={()=> removeUser(index)}>
                <DeleteOutlineIcon></DeleteOutlineIcon>
                </IconButton> 
  
            </Grid>
          </Grid>))
        }
         <Button variant="contained" color="secondary" onClick={addUser}>ADD MORE</Button>
      </Paper>
    </Container>
  );
}

export default App;
