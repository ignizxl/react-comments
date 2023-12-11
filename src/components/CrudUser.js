// fazendo as importações do useState e useEffect
import React, { useState, useEffect } from "react"
// fazendo a importação do Form
import Form from "./Form"
// fazendo a importação da Table
import Table from "./Table"
// fazendo a importação do httpHelper
import { httpHelper } from "../helpers/httpHelper"

// Definindo um componente funcional chamado CrudUser
const CrudUser = () => {
	// Estado para armazenar a lista de usuários
	const [users, setUsers] = useState(null)

	// Endpoint da API para buscar e manipular dados do usuário
	const url = "http://localhost:5000/users"

	//Instância da função httpHelper
	const api = httpHelper()

	// Gancho de efeito para buscar usuários quando o componente é montado
	useEffect(() => {
		getUsers()
	}, [])

	//Função para adicionar um novo usuário
	const postUser = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	//Função para atualizar um usuário existente
	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	//Função para excluir um usuário
	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	//Função para buscar todos os usuários com dados expandidos da empresa
	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`)
			.then(res => {
				setUsers(res)
			})
			.catch(err => console.log(err))
	}

	//Se os usuários ainda não foram buscados, retorne null
	if (!users) return null

	return (
		<>
			<h3>New user</h3>
			{/* Indo para a seção para adicionar um novo usuário */}
			<Form postUser={postUser} />
			{/* Renderizando o componente Form para adicionar um novo usuário */}
			<div className='all-users'>
				{/* Contêiner para todos os usuários */}
				<h3>All users</h3>
				{/* Indo para a seção que exibe todos os usuários */}
				<Table
					users={users}
					setUsers={setUsers}
					postUser={postUser}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
				{/* Renderizando o componente Table para exibir e gerenciar usuários */}
			</div>
		</>
	)
}
// Exporta o componente CrudUser como exportação padrão
export default CrudUser
