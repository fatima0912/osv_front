import axios from "./service"
import {useState, useEffect} from "react"
 
 
 function UserList() {

    const [data, setData] = useState([])


    useEffect(() => {
      getData()
    }, [])

    const getData = () => {
        axios.get('/user').then((res)=> {
            setData(res.data)
            console.log(res.data)
        })
    }

    // {products.map(item => <ProductItem key={item.id} product={item} />)}
     return ( <>
        <div className="p-5 m-5">
        <ul class="list-group">
        {data && data.map((item , i) => <li class="list-group-item">{i + 1} | {item.firstName} {item.lastName} | {item.mobile}</li> )}

        </ul>
        </div>
        
     </> );
 }


export default UserList