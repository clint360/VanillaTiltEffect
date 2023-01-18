import data from './data.js';


function Card({ src, title, description, handleClick, key}) {
  const tiltRef = React.useRef() 
 
  const [state, setState] = React.useState(data);
  React.useEffect(() => {   
      const tiltNode = tiltRef.current
      const vanillaTiltOptions = {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
      }
      VanillaTilt.init(tiltNode, vanillaTiltOptions)
      return () => {
          tiltNode.vanillaTilt.destroy()
      }
  }, [])

  return (
              <div  ref={tiltRef}  onClick={handleClick} className="card" key={key}>
                  <img src={src} alt={title} />
                  <h4>{title}</h4>
                  <p>{description}</p>
              </div>
  )
}

function Cardin() {
  const {useState} = React;
  const [state, setState] = React.useState(data);

    const shuffleCards = (arr) => {
     return arr.sort((a,b) => 0.5 - Math.random());
    }
    function handleClick () {
      const newArr = shuffleCards([...state]);
      setState(newArr);
    }

  return (
    <div className="card-container">
      {state.map((data) => {
        return (
         <Card {...data} handleClick={handleClick} />  
        );
      }) }
    </div>)}

function App() {
  return (
    <div className="overal-container">
      <Cardin />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
