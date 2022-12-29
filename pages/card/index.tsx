import styles from './styles.module.scss';

type CollaboratorProps = {
 nome: string;
 email: string;
 cargo: string;
 telefone: string;
}

export default function Card(){
 return (
  <>
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.dates}>
      <h2>Maria Raquel Cordeiro Santos</h2>
      <p><strong>Software Engineer</strong></p>
      <p>maria@hotmail.com - 99999-9999</p>
     </div>
     <div>
      <img src="https://miro.medium.com/max/200/0*zPG9dqz508rmRR70." alt="qr fake" />
     </div>
    </div>
   </div>
  </>
 )
}

/**
 * {collaborator.nome} 
 * <p>{collaborator.email}</p>
   <p>{collaborator.cargo}</p>
   <p>{collaborator.telefone}</p>
 */