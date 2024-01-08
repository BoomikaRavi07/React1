import React, {useState ,useEffect} from 'react';
import Person from '../components/person/Person';
import Menu from '../components/menu/Menu';
import TimeZone from "../components/timezone/TimeZone";

function App() {
   let [name, setName] = useState("Boomika");
   let [lat, setLat] = useState("11.67");
   let [lng, setLng] = useState("76.89");
   let props={first_name: "Rathika",age: 80,data:[{"skill":"java","rating":3},
   {"skill":"Html","rating":5},{"skills":"css","rating":4}]}

   const timer = setInterval(()=>{
       setName("Aswini");
       setLat("9.087");
       setLng("67.67");
   }, 5000)

   let btnOnClick = (()=> {
      console.log("Button click");
   })

   useEffect(() =>{

    const test =(() =>{
      return "Nothing"
    }) 
    let innerHtml = `<p>${test()}</p>`
    document.getElementById("top").innerHTML = innerHtml
   })


  return (
      <div className="Resume">
      <div className='Top' id="top">
        <button type = 'submit' onClick={btnOnClick}>Login</button>
      </div>
      <div className='Bottom'>
          <div className='Left'>
            <p>Name {name}</p>

          <Menu {...props}/>
          </div>
          <div className='Right'>
            <Person token ={'nfghnmkjnmjnkj'} age={83}/>
            <TimeZone lat={lat} lng={lng}/>
            </div>
      </div>
    </div>
  );
}

export default App;