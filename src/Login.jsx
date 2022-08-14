import axios from "./service"
import {useState } from "react"
import {useNavigate} from "react-router-dom"

function Login() {

    const navigate  = useNavigate()
    const [uid, setUid] = useState("")
    const [pass, setPass] = useState("")
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [data, setData] = ("")

    let body = {
        uid : uid,
        password: pass
    }

    const loginUser = () => {
        loginA(body)
    }
    
      const  loginA = (body)  => {
        axios.post('/user/login', body).then((res) => {
            if(res.status === 200){
                setCorrect(true)
                setData(res.data)
                navigate('user/list')

            } else {
                setWrong(true)
            }
        })
    }

    return ( <div className="m-5 p-5">
    <h4>Login Page</h4>
    <div class="input-group mb-3">
      
  <span class="input-group-text" id="basic-addon1">User Id</span>
  <input type="text" class="form-control" placeholder="User Id" onChange={e => setUid(e.target.value)} />
</div>

<div class="input-group mb-3">
  <input type="password" class="form-control" placeholder="Password" onChange={e => setPass(e.target.value)}/>
  <span class="input-group-text" id="basic-addon2">Password</span>
</div>
<button type="button" class="btn btn-primary" onClick={loginUser}>Submit</button>


{correct && <div className="alert alert-success" role="alert">
Logged In!
</div>
  }  
{wrong &&
<div className="alert alert-danger" role="alert">
  Error—check it out!
</div>
}

    </div> );
}

export default Login;