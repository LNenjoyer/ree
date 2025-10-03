import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import list from './materialy/list.png'
import paczka from './materialy/paczka.png'
import pocztowka from './materialy/pocztowka.png'


function App() {
  const [count, setCount] = useState(0);
  const [kod, setKod] = useState(0);

  function onChange1(value){
    setCount(e.target.value);
    
  }

  function onClick1(value){
    setCount(value);
    
  }
  function butto(){
    if(count==0){
      document.getElementById("img1").src=list;
      document.getElementById("cena").textContent="Cena: 1.50zł";

    }
    else if(count==1)
    {
      document.getElementById("img1").src=paczka;
      document.getElementById("cena").textContent="Cena: 10zł";
    }
    else
    {
      document.getElementById("img1").src=pocztowka;
      document.getElementById("cena").textContent="Cena: 1zł";
    }
  }
  function butto2(){
    
    if(kod>9999&&kod<100000)
    {
      document.getElementById("abc").textContent="Dane do przesyłki zostały wprowadzone";
    }
    else{
      document.getElementById("abc").textContent="Nieprawidłowa liczba cyfr w kodzie pocztowym";
    }

    
  }

  return (
    <>
    <div id='acen'>
      <div className="container">
        <header>Nadaj Przesyłke PESEL Patryk Szykuła</header>
        <div id='maina'>
          <div className='halfaa0'>
            <div className='halfaa1'>
              <p>Rodzaj przesyłki</p>
              <form>
                <input type='radio'  name='rad1'  onClick={()=>onClick1(2)}/>Pocztówka <br/>
                <input type='radio'  name='rad1'  onClick={()=>onClick1(0)}/>List<br/>
                <input type='radio'  name='rad1'  onClick={()=>onClick1(1)}/>Paczka
              </form>

            </div>
            <button onClick={()=>butto()} id='aa'>Sprawdź cene</button>
            <div className='halfaa2'>
              <img id='img1' />
              
            </div>
            <div className='halfaa2'>
              <h2 id='cena'></h2>
            </div>
           
          </div>
          
          <div className='halfaa3'>
           <p>Dane adresowe</p>
           <p>Ulica z numerem:</p>
           <input/>
           <p>Kod pocztowy:</p>
           <input id='kodp' type='number' onChange={(e)=>setKod(e.target.value)}/>
           <p>Miasto:</p>
           <input/>
          </div>
        </div>
        <div className='butto'>
          <button onClick={()=>butto2()}>Zatwierdź</button>
        </div>
        <p id="abc"></p>
      </div>
    </div>
    
      

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
