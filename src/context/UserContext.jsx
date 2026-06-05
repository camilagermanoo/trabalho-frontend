import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:3001/filmes'

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
  const [loading, setLoading] = useState(false)

  async function fetchFilmes() {
    setLoading(true)
    try {
      const response = await axios.get(API_URL)
      setFilmes(response.data)
    } catch (error) {
      console.error('Erro ao buscar filmes:', error)
    } finally {
      setLoading(false)
    }
  }

  async function addFilme(novoFilme) {
    try {
      const response = await axios.post(API_URL, novoFilme)
      setFilmes((prev) => [...prev, response.data])
    } catch (error) {
      console.error('Erro ao cadastrar filme:', error)
    }
  }

  return (
    <UserContext.Provider value={{ filmes, loading, fetchFilmes, addFilme }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}