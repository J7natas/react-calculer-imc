import { useState } from 'react';
import styles from './app.module.css';
import Logo from './assets/powered.png';
import { Level, calculerImc, levels } from './helps/hepl';
import { Grid } from './components/gridItem/gridItem';
import arrow from './assets/leftarrow.png';

const App = () => {

  const [heigth, setHeigth] = useState(0);
  const [wight, setWeight] = useState(0);
  const [Toshow, setToshow] = useState<Level | null>(null)

  const handerResult = () => {
    if(heigth && wight) {
        setToshow(calculerImc( heigth, wight));
    } else {
      alert("Coloque valores nos Dois Campos");
    }
  }

  const handlerBack = ()=> {
    setToshow(null);
    setHeigth(0);
    setWeight(0);
  }

    return (
      <div className={styles.main}>
          <header>
            <div className={styles.contHeader}>
              <img src={Logo} width={200} />
            </div>
          </header>
          <div className={styles.Container}>
            <div className={styles.contLeft}>
              <h1>Calcule o seu IMC.</h1>
              <p>IMC a sigla para Indece de Massa Xorporéa,
                Parâmetro adotado pela Organização Mundial de saúde
                para calcular o peso ideal de cada pesso.
              </p>
              <input
                type='number'
                placeholder='Digite sua altura EX: 1.5ml'
                value={heigth > 0 ? heigth : 'Digite sua altura Ex: 1.5' }
                onChange={e => setHeigth(parseFloat(e.target.value))}
                disabled={Toshow ? true : false}
              />
              <input
                type='number'
                placeholder='Digite seu peso Ex: 50.5kg'
                value={wight > 0 ? wight : 'Digite seu peso Ex: 50.5kg' }
                onChange={e => setWeight(parseFloat(e.target.value))}
                disabled={Toshow ? true : false}
              />

              <button onClickCapture={handerResult}  disabled={Toshow ? true : false}>Mostar Resultado</button>
            </div>
            <div className={styles.contRight}>
              {!Toshow &&
                 <div className={styles.grid}>
                 {levels.map((item, key) =>(
                   <Grid key={key} item={item} />
                 ))}
               </div>
              }
              {Toshow &&
                <div className={styles.showBig}>
                  <div onClick={handlerBack} className={styles.arrow}>
                    <img src={arrow} />
                  </div>
                  <Grid item={Toshow} />
                </div>
              }
             
            </div>
          </div>
      </div>
    )
}

export default App;