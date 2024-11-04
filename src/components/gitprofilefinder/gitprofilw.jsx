import {useState,useEffect} from 'react'

export default function GitFinder() {
    const [user,setUser]=useState("")
    const [username,setUsername]=useState(" ")
    const [userDet,setUserDet]=useState("")


    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(data=>setUserDet(data))
    },[username])

    function handleClick(){
        setUsername(user)
    }

  return (
    <div className="text-center">      
    <h1 >Git profile Finder</h1>
      
        <input type="text" placeholder="Enter any Name......" onChange={(e)=>setUser(e.target.value)}></input>
        <button onClick={handleClick} className="w-28" >search</button>
   

      <div>
        <h3>UserID : {userDet.login}</h3>
        <img width="100"src={userDet.avatar_url} alt={userDet.login}></img>
        <h2>Followers : {userDet.followers}</h2>
        <h2>Following : {userDet.following}</h2>
      </div>
    </div>
  )
}
