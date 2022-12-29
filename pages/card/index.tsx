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
      <p>Software Engineer</p>
      <span>maria@hotmail.com</span> - <span>99999-9999</span>
     </div>
     <div>
      <img src="https://miro.medium.com/max/160/0*zPG9dqz508rmRR70." alt="qr fake" />
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