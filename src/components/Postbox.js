import React, { useEffect, useState } from 'react'
import pinIcon from './Icon/pin.svg'
import PostTag from './posttag'
import commentIcon from './Icon/comment.svg'
import heartIcon from './Icon/heart.svg'
import verifyIcon from './Icon/verify.svg'
import { Link, Route, Router } from 'react-router-dom'
const Postbox =(props) => {
  const [Tags,setTag] = useState([])
  const [isVilified,setIsVilified] =useState(false)

 useEffect(()=>{
   setTag(props.taglist)
 },[])

  return (
    <div className='Postbox'>
      <span className='Title'>{props.title}</span>
      <img src={pinIcon} alt='pin' className='bookmark'/>
      <p className='date'>{props.date}</p>
      <hr/>
        {
          Tags.map((Tag,i)=>{
            return <PostTag TagName={Tag} key={i}/>
          })
        } 
        <br/>
        <p className='detail'>
        {props.detail}
        </p>
        <div className='transparent'></div>
        <br/>
      
      {isVilified?<></>:<></>}
      <span className='CLV'>
      {
          props.isVerify?<span className='text'><img src={verifyIcon} alt='verify' className='verify'/>Answer Vilified</span> :<></>
        }
        <img src={commentIcon} alt='comment' className='comment'/>
        <span className='text'>{props.comment}</span>
        <img src={heartIcon} alt='heart' className='heart'/>
        <span className='text'>{props.like}</span>
        <Link to="/Post" className='viewButton'>View</Link>
            

      </span>
    </div>
  ) 
}

export default Postbox