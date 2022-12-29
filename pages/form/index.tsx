import { api } from "../api/api";

import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './styles.module.scss';

interface FormProps {
  nome: string;
  email: string;
  cargo: string;
  telefone: string;

}

const collaboratorFormSchema = yup.object().shape({
  nome: yup.string().required('Esse campo não pode estar vazio'),
  email: yup.string().required('Esse campo não pode estar vazio'),
  cargo: yup.string().required('Esse campo não pode estar vazio'),
  telefone: yup.string().required('Esse campo não pode estar vazio'),
})

export default function Form() {

  const { handleSubmit, register, formState: { errors, isSubmitting }} = useForm<FormProps>({
    resolver: yupResolver(collaboratorFormSchema),
  });
  
  const handleCreateCollaborator: SubmitHandler<FormProps> = async ({nome,email,cargo,telefone}) => {
    try {
      await api.post('/Colaborador', {
        nome: nome,
        email: email,
        cargo: cargo,
        telefone: telefone
      }).then(response => {
        if (response.status === 200) {
          console.log('deu certo')
        }else {
          alert(response.statusText)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(handleCreateCollaborator)}>

      <h1>Cadastro de Colaborador</h1>
    
      <div className={styles.contentForm}>
    
        <div className={styles.field}>
          <label>Nome Completo</label>
          <input type="text" {...register("nome")} />
          <p>{errors.nome?.message}</p>
        </div>
    
        <div className={styles.field}>
          <label>Email do domínio Moura</label>
          <input type="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
    
        <div className={styles.field}>
          <label>Cargo</label>
          <input type="text" {...register("cargo")} />
          <p>{errors.cargo?.message}</p>
        </div>
    
        <div className={styles.field}>
          <label>Número de Telefone</label>
          <input type="text" {...register("telefone")} />
          <p>{errors.telefone?.message}</p>
        </div>
    
      </div>
    
      <button id="submitButton" className={styles.button} type="submit">Cadastrar</button>
      
      </form>
    </div>
    
  );
}
