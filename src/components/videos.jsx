
import { useState } from "react";
import "../styles/videos.css"
 //import videoIcon from "../images/videoIcon.png" 
 import data from '../data/db.json'

const Videos = () => {
    const[video,setVideo] = useState(data.videos)
    const [shorts,] = useState(data.shorts)
    console.log(shorts);
    // let [shorts,setShorts] = useState()
        //  useEffect(()=>{
        //     // let fetchData = async()=>{
        //     //     let response = await fetch('http://localhost:4000/youtube')
        //     //     let data =await response.json()
        //     //     setVideo(data.videos)
        //     //     setShorts(data.shorts)
        //     // }
        //     let fetchData = async () => {
        //         let response = await fetch('http://localhost:4000/videos')
        //         let data=await response.json()
        //         setVideo(data)
        //     }
        //      fetchData()
        // },[])
        // useEffect(()=>{

        
        //     let fetchData=async ()=>{
        //         let response = await fetch('http://localhost:4000/shorts')
        //         let data=await response.json()
        //         setShorts(data)
        //     }
        //     fetchData()
        //  },[])
     
     
     
    let removeVideo = (id,name) =>{
        // fetch(`http://localhost:4000/videos/${id}`,{
        //     method:'DELETE'
        // })
         let result = video.filter((x)=>x.id!==id)
        setVideo(result)
         alert(`${name}video got removed`)
    }

     return (
        <div className="videos-container">
          <h1>Featured Videos</h1>
          <div className="videoData">
          {video.map((data,index)=>{
          return (
            <div key={index.toString()} className="videos">
                <img src={data.thumbnail} alt="" />
                <div className="videoDetails">
                    <h6>{data.title}</h6> 
                    <p>{data.channel}</p>
                    <p>{data.views}</p>
                   <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                </div>  
            </div>
          )
          })}
          </div>
          <div className="shortsData">
            {shorts.map((data,index)=>
            {
                return(
                    <div key={index.toString()} className="shorts">
                        <img src={data.thubmnail} alt=""/>
                       <div className="shortsDetails">
                        <h6>{data.title}</h6>
                        <p>{data.views}</p>
                       </div>
                    </div>
                );
            })}
          </div>
          </div>
    );
        }
        
          
    

export default Videos;