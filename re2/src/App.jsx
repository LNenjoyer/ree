import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import meczyki from './meczyki.png'
import Wincej1 from './skroty'
import Wincej2 from './skroty2'
import Wincej3 from './skroty3'
import Wincej4 from './skroty4'
import Wincej5 from './skroty5'


function App() {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const button1 = async () => {
    setCount1(1);
    await sleep(3000);
    setCount1(0);
  };
  const button2 = async () => {
    setCount2(1);
    await sleep(3000);
    setCount2(0);
  };
  const button3 = async () => {
    setCount3(1);
    await sleep(3000);
    setCount3(0);
  };
  const button4 = async () => {
    setCount4(1);
    await sleep(3000);
    setCount4(0);
  };
  const button5 = async () => {
    setCount5(1);
    await sleep(6000);
    setCount5(0);
  };
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  const [count5, setCount5] = useState(0)


  const [isToggled, setIsToggled] = useState(false)
const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div id='hed'>
        <div className='logo'><img src={meczyki} /></div>
        <div className='daynig'><button
      className={`toggle-button ${isToggled ? 'toggled' : ''}`}
      onClick={handleToggle}
    >
      {isToggled ? 'Dzień' : 'Noc'}
    </button>
    </div>
        <div className='cat'>NEWSY</div>
        <div className='cat'>WYNIKI NA ŻYWO</div>
        <div className='cat'>SPORTBUZZ</div>
        <div className='cat'>SKRÓTY</div>
        <div className='cat'>TYPY</div>
        <div className='cat'>BUKMACHERZY<select name="nazwa">
		<option>Bletklik</option>
		<option>bukmacher2</option>
		<option>bukmacher3</option>
		<option>bukmacher4</option>
	</select></div>

      </div>
      <div id='mnain'>
        <table>
          <tbody>
            <tr>Skróty</tr>
            <tr className='naz'><td>FC Porto - Benfica Lizbona</td><td>0:0</td></tr>
            <tr className='naz'><td>Celta de Vigo - Atlético Madryt</td><td>1:1</td></tr>
            <tr className='naz'><td>Juventus Turyn - AC Milan</td><td>0:0</td></tr>
            <tr className='naz'><td>Górnik Zabrze - Legia Warszawa</td><td>3:0</td></tr>
            {count1==0?<button onClick={()=>button1()}>Rozwiń</button>:<Wincej1/>}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>Typy</tr>
            <tr className='naz'><td>Polska - Nowa Zelandia</td></tr>
            <tr className='naz'><td>Finlandia - Litwa</td></tr>
            <tr className='naz'><td>Wyspy Owcze - Czarnogóra</td></tr>
            <tr className='naz'><td>Malta - Holandia</td></tr>
            {count2==0?<button onClick={()=>button2()}>Rozwiń</button>:<Wincej2/>}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>Bonusy</tr>
            <tr className='naz'><td>Superbet kod promocyjny</td></tr>
            <tr className='naz'><td>Betclic kod promocyjny</td></tr>
            <tr className='naz'><td>STS kod promocyjny</td></tr>
            <tr className='naz'><td>Fortuna kod promocyjny</td></tr>
            {count3==0?<button onClick={()=>button3()}>Rozwiń</button>:<Wincej3/>}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>Sportbuzz</tr>
            <tr className='naz'><td>FC Barcelona rozgromiła Bayern w meczu Ligi Mistrzyń</td></tr>
            <tr className='naz'><td>Ewa Pajor jednego z goli w meczu z Bayernem strzeliła "nożycami"</td></tr>
            <tr className='naz'><td>Zespoły z TOP 5 lig Europy, które mają najniższa średnią traconych bramek na mecz</td></tr>
            <tr className='naz'><td>Według Fabrizio Romano Sergio Conceição został no</td></tr>
            {count4==0?<button onClick={()=>button4()}>Rozwiń</button>:<Wincej4/>}

          </tbody>
        </table>
        <div className='zyw'>
          <a>WYNIKI NA ŻYWO</a>
          <button id='but1' onClick={()=>button5()}>Wszystkie</button>
        </div>
        <div className='zyw'>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/56/original.png'/></td><td className='teksiz'>CHOR</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/155/original.png'/></td><td className='teksiz'>PL19</td></tr>
              <tr><td className='teksiz2'>dziś 15.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/102/original.png'/></td><td className='teksiz'>JAP</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/152/original.png'/></td><td className='teksiz'>PAR</td></tr>
              <tr><td className='teksiz2'>dziś 13.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/100/original.png'/></td><td className='teksiz'>PAO</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/104/original.png'/></td><td className='teksiz'>KAZ</td></tr>
              <tr><td className='teksiz2'>dziś 15.00</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          {count5==0? "":<Wincej5/>}
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/225/original.png'/></td><td className='teksiz'>CZ21</td></tr>
              <tr><td><img className='aaa' src='https://pliki.meczyki.pl/live-score/soccer/country/35/original.png'/></td><td className='teksiz'>BRA</td></tr>
              <tr><td className='teksiz2'>dziś 16.40</td></tr>
            </tbody>
          </table>
        </div>
        <div className='zyw'>
          <div className='fish'>
            <div className='rek'>
              <p id='rrak'>Reklama</p>
              <div id='reklama'></div>
            </div>
          </div>
        </div>







      </div>
    </>
  )
}

export default App
