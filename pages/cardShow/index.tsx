import { useEffect, useState } from 'react';
import { api } from '../api/api';

import Card from '../../components/Card';
import axios from 'axios';

import styles from './styles.module.scss';

type CollaboratorProps = {
 nome: string;
 email: string;
 cargo: string;
 telefone: string;
}

export default function CardShow(){

  const [data, setData] = useState<CollaboratorProps>({} as CollaboratorProps);

  const [id, setId] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    if (id) {
      setId(id);
    }else {
      window.location.href = '/'
    }
    axios.get(`http://10.26.12.67:5031/Colaborador/${id}`).then((res)=> {
      if(res.data){
        setData(res.data);
        var srcData = document.getElementById("ImagePreview")!.src = "data:image/png;base64," + res.data.qrcode;
        console.log(typeof res.data.Qrcode)
      }
    })
  }, [])

 return (
  <>
   <div className={styles.container}>
    <div className={styles.content}>
     <div className={styles.dates}>
      <h2>{data.nome}</h2>
      <p><strong>{data.cargo}</strong></p>
      <p>{data.email} - {data.telefone}</p>
     </div>
     <div>
      <img id="ImagePreview" src="" alt="qr fake" className={styles.qrcode} />
     </div>
    </div>
   </div>
  </>
 )
}
