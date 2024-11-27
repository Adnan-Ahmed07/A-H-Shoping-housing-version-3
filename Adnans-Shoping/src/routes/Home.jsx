import HomeItem from "../components/HomeItem";
import{useSelector}from "react-redux"
import Sliders from "../components/Sliders";
const Home=()=>{ 
 const items=useSelector((store)=>store.items);
 
  return (
    <main>
      <Sliders></Sliders>
    <div className="items-container">
      {items.map(item=><HomeItem key={item.id} item={item}/>)}
      
    </div>

    </main>
  );
}
export default Home;