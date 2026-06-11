import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const API_FILMES = 'http://localhost:3001/filmes'
const API_USUARIOS = 'http://localhost:3001/usuarios'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [filmes, setFilmes] = useState([
    {
      id: 99,
      titulo: 'Filme Teste',
      diretor: 'Diretor Teste',
      genero: 'Ação',
      avaliacao: 8.0,
      email: 'teste@email.com'
    }
  ])

  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchFilmes() {
    setLoading(true)

    try {
      const response = await axios.get(API_FILMES)
      setFilmes(response.data)
    } catch (error) {
      console.error('Erro ao buscar filmes:', error)
    } finally {
      setLoading(false)
    }
  }

  async function addFilme(novoFilme) {
    try {
      const response = await axios.post(API_FILMES, novoFilme)
      setFilmes((prev) => [...prev, response.data])
    } catch (error) {
      console.error('Erro ao cadastrar filme:', error)
    }
  }

  async function cadastrarUsuario(novoUsuario) {
    try {
      const response = await axios.post(API_USUARIOS, novoUsuario)
      setUsuarios((prev) => [...prev, response.data])
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        filmes,
        usuarios,
        loading,
        fetchFilmes,
        addFilme,
        cadastrarUsuario
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}