type CollaboratorProps = {
 nome: string;
 email: string;
 cargo: string;
 telefone: string;
}
import styles from './styles.module.scss';

export default function Card({nome,email,cargo,telefone}: CollaboratorProps){
 return(
  <>
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.dates}>
      <h2>{nome}</h2>
      <p><strong>{cargo}</strong></p>
      <p>{email} - {telefone}</p>
     </div>
     <div>
      <img id="ImagePreview" src="" alt="qr fake" />
     </div>
    </div>
   </div>
  </>
 )
}