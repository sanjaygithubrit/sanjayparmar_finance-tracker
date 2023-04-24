import React from "react";
import { useState, useEffect } from "react";
import Post1 from "./Post";

const Commetshowcomponent = (id) => {
  // const idc = id

  const [comment, setComment] = useState([])
  const [toggle, setToggle] = useState(true)
  let [load, setloadData] = useState(1);
  const viewcomment = async () => {

    if (load > 1) {
      setloadData(1)
      setToggle(!toggle)

      return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id.id}`)
        .then((response) => response.json()
        )
        .then((data) => setComment(data));
    } else {
      setToggle(!toggle)

      return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id.id}`)
        .then((response) => response.json()

        )
        .then((data) => setComment(data));
    }


  }


  const commentload = () => {

    setloadData(load + 1)


  }


  if (comment && toggle) {

    return (
      <div>
        {comment.slice(0, load).map((comment, index) => (
          <div>
            <p>Comment </p>
            <p>Comment USer email : {comment.email}</p>
            <p>{comment.body}</p>

          </div>
        ))}

        <a className="viewbutton" onClick={() => viewcomment(id)}>View Comment</a>
        {load < comment.length && (<a className="viewbutton" onClick={commentload}>load  More </a>)}
      </div>
    )
  } else {
    return <a className="viewbutton" onClick={() => viewcomment(id)}>View Comment</a>
  }




}
export default Commetshowcomponent