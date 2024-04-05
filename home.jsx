import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',backgroundImage:`url(/360.jpg)`,backgroundRepeat:'no-repeat',height:'525px',width:'100%',color:"white",backgroundSize:'100%'}}>
     <h2>Welcom, {user}!</h2>
     <p>This is your home page</p>
     <button onClick={logout}>Log out</button>
     </div>
  );
};


export default Home;
