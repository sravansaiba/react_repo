import Tabs from "./tabs"
import './style.css'
function RandomComponent(){
    return <div>this is a random component from div</div>
}

export default function TabTest() {
    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
      ];

      function handleChange(getCurrentIndex){
            console.log(getCurrentIndex);
            
      }
  return <Tabs tabContent={tabs} onChange={handleChange}/>

}
