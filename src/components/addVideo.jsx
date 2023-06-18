//import dribble from '../images/dribble.png'
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';



const AddVideo = () => {
    let navigate=useNavigate()
    let thumbnail=useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    // eslint-disable-next-line no-unused-vars
    let upload =(e) => {
        e.preventDefault( )   //prevents the page from reloading.
        let data = {
            thumbnail:thumbnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
         }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video uploaded successfully')
        navigate('/')
    }
    return(
      
          
          
    
    <form action="" onSubmit={upload}>
        {/* <h2>Add</h2> */}
       
        <input ref ={thumbnail}  type="url" placeholder="Enter Thumbnail" name="thumnail"/><br></br>
       
        <input ref={title}  type="url" placeholder="Enter title" name="title"/><br></br>
      
        <input ref={channel}  type="url" placeholder="Enter Channel" name="channel"/><br></br>
       
        <input ref={views} type="url" placeholder="Enter views" name="views"/><br></br>
        
        <button id="btn1">Upload Video</button>
        </form>
    )
}
          
    export default AddVideo;