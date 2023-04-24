import React from "react";
import {useNavigate} from "react-router-dom"
// import './User.css'
import './Post.css'
import Commetshowcomponent from "./postcomment";
import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";


const Post1 =  (id) =>{
    const location = useLocation()
   
    const [userp, setUser] = useState([]);
   
    const [load, setloadData] = useState(1);
     const [toggle, setToggle] = useState(true);


    const fetchData1 = async() => {
       
        return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${location.state.id}`)
              .then((response) => response.json())
              .then((data) => setUser(data));
             
            }


const loadmoredata = () =>{
    setloadData(load + 1)
}

   
    useEffect(()=>{
        fetchData1();
        
      },[])





const Datare = (post,index) =>{
    return ( <div>

        <div className="postmainclass">
       
          <div className="main-post">
          <h4 className="idhead">UserId  :  {post.userId} </h4> <h4 className="idhead1">Id: {post.id} </h4>
          </div>
          <span className="tit">Title : </span>
                    <p className="titlepostclass">{post.title}</p>
          <span className="tit">Body : </span>
         
                     <p className="bodypostclass">{post.body}</p>

                    
                    <Commetshowcomponent id={post.id} /> 
     </div>
   
    
        </div>)
}

  
 return (
    <div className="postmainclass">
    <div>
      {userp.slice(0,load).map(Datare)}
    </div>
    <div>
    <a className="viewbutton" href="/" >Go Back </a>
        {load < userp.length && ( <a className="viewbutton" onClick={loadmoredata}>load  More </a> )}
      
    </div>
    </div>
 )
   
}

 export default Post1
