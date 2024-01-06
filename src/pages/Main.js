
import Person from '../components/person/Person';
import Menu from '../components/menu/Menu';

function App() {
  let props={first_name: "Rathika",age: 80,data:[{"skill":"java","rating":3},
  {"skill":"html","rating":5},{"skills":"css","rating":4}]}
  return (
    <div className="Resume">
      <div className='Top'>
      </div>
      <div className='Bottom'>
        <div className='Left'>
          <Menu {...props}/>
          </div>
          <div className='Right'>
            <Person token ={'nfghnmkjnmjnkj'} age={33}/>
            </div>
      </div>
    </div>
  );
}

export default App;