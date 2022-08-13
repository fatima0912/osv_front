import axios from "./service"
import {useState} from "react"
 
function Register() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState()
    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [correct, setCorrect] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [pass, setPass] = useState("")
    const [uid, setUid] = useState('')

    let body = {
        firstName : firstName,
        lastName : lastName,
        age : age,
        mobile: mobileNumber,
        email: email,
        gender: gender
    }

    const registerA = (body) => {
        axios.post('/user/register', body).then((res) => {
            if(res.status === 201){
                setCorrect(true)
                setPass(res.data.pwd)
                setUid(res.data.uid)
            } else {
                setWrong(true)
            }
        }
            
        )
    }

    const registerUser = () => {
        registerA(body);
    }

    return ( <div className="m-5 p-5">
    
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">First Name</span>
  <input type="text" class="form-control" placeholder="FirstName" onChange={e => setFirstName(e.target.value)}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Last Name</span>
  <input type="text" class="form-control" placeholder="LastName" onChange={e => setLastName(e.target.value)}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Email Address</span>
  <input type="text" class="form-control" placeholder="Email" onChange={ e =>setEmail(e.target.value)}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Age</span>
  <input type="number" class="form-control" placeholder="Age" onChange={e =>setAge(e.target.value)}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Mobile Number</span>
  <input type="text" class="form-control" placeholder="MobileNumber" onChange={e =>setMobileNumber(e.target.value)}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Gender (Male, Female, Rather Not Say)</span>
  <input type="text" class="form-control" placeholder="Gender" onChange={e =>setGender(e.target.value)} />
</div>

<button type="button" class="btn btn-secondary" onClick={registerUser}>Submit</button>

{correct && <div className="alert alert-success" role="alert">
Registered ---- {pass} ---- {uid}
</div>
  }  
{wrong &&
<div className="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
}
    </div> );
}

export default Register;