import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


function Forget() {
    const [email, setEmail] = useState('');
    const [newpassword,setPassword]=useState('')
    const navigator = useNavigate()
    useEffect(() => {
        console.log('email is:',email);
        console.log('password is:',newpassword);
      }, [email, newpassword]);
      const handleSubmit = async () =>{
            const response= await axios.post('http://localhost:2000/forget',{
                email,newpassword
            })
            if(response.data){
console.log('uhjjhuyjuhy',response.data);
navigator('/')
            }}
    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',gap:'10px',alignItems:'center',backgroundImage:`url(/sky.jpg)`,backgroundSize:'100%',height:'520px',width:'100%',backgroundRepeat:'no-repeat'}}>
            <input type="text" name="email" style={{width:'500px',padding:'10px'}}
            placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="newpassword"style={{width:'500px',padding:'10px'}} 
            placeholder="enter your new password" onChange={(e) =>  setPassword(e.target.value)}/>
            <button style={{width:'500px'}}onClick={handleSubmit}>update password</button>
        </div>
    )
}
export default Forget;