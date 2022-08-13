import {useNavigate, Link} from "react-router-dom"


function Home() {

    const navigate = useNavigate()
    return (
      <div className="App m-5 p-5">
        <div class="btn-group" >
        <Link type="button" class="btn btn-primary" to='/register'>Register</Link>
        <Link type="button" class="btn btn-primary" to='/login'>Login</Link>
    </div>
      </div>
    );
  }

  export default Home;