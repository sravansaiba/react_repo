import { useEffect, useState } from "react";

export default function AutoSuggest() {
  const [users, setUsers] = useState([]);
  const [searchparam,setSearchParam] = useState("");
  const [showDropdown,setshowDropdown] = useState(false)
  const [filterdata,setFilterData]=useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) =>
        setUsers(data.users.map((userItem) => userItem.firstName))//taking only firstname 
      );
  }, []);

function handleChange(event){
  const query = event.target.value.toLowerCase()
  setSearchParam(query)

  if(query.length > 1){
    const filterinf =
    users && users.length ? users.filter(item => item.toLowerCase().includes(query)):[];
    setFilterData(filterinf)
    setshowDropdown(true)
  }

  else {
    setshowDropdown(false)
  }  

}


function HandleClick(e){
  setSearchParam(e.target.innerText)
  showDropdown(false)
}

return (
    <div>
      <input type="text"
       placeholder="search users here..."
       value={searchparam}
       onChange={handleChange}></input>
      <br/>
      <div className="data">
        {showDropdown && filterdata.map((f,i)=>{
          return (
            <span className="cursor-pointer" onClick={HandleClick} key={i}>{f}<br/></span>
          )
        })}
      </div>
    </div>
  );
}
