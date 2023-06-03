import { Level } from "../../helps/hepl"
import styles from './index.module.css';
import up from '../../assets/up.png';
import down from '../../assets/down.png';

type props = {
     item: Level,
}

export const Grid = ( { item }: props ) => {
        return (
            <div className={styles.main}  style={{ backgroundColor: item.color }}>
                <div className={styles.aicons}>
                    <img src={item.icon == 'up' ? up : down} />
                </div>
                <div className={styles.title}>{item.title}</div>
                {item.youImc && 
                    <div className={styles.youImc}> seu IMC e de {item.youImc} kg/m²</div>
                }
                <div className={styles.viweImc}>
                    IMC esta dentre {item.imc[0]} e {item.imc[1]}
                </div>
            </div>
        )
}

