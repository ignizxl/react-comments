import React, { useState } from "react"
import DropComapies from "./DropCompanies"

// Definindo um componente funcional chamado Form, recebendo props (userData, postUser, updateUser)
const Form = ({ userData = {}, postUser, updateUser }) => {
	const [user, setUser] = useState({
		name: userData.name ?? "",
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		companiesId: userData.companiesId ?? "0",
	})

	// Inicializa o estado usando o gancho useState, com valores padrão obtidos da propriedade userData

	const handleValue = e => {
		// Define uma função chamada handleValue, recebendo um evento (e)

		setUser({ ...user, [e.target.name]: e.target.value })
		//Atualiza o estado com o novo valor do evento
	}

	// Define uma função chamada submitUser, recebendo um evento (e)
	const submitUser = e => {
		e.preventDefault()

		if (user.companiesId === "0") return

		if (userData.id) {
			updateUser(userData.id, user)
			
		} else {
			postUser(user)
		}

		// Verifica se o formulário é para atualização ou criação de usuário, depois chama a função correspondente
	}

	return (
		
		<form onSubmit={submitUser} className='row'>
			{/* componente do formulário */}

			{/* Campo de entrada para o nome do usuário */}
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			{/* Campo de entrada para o e-mail do usuário */}
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			{/* Campo de entrada para o número de telefone do usuário, com validação de padrão */}
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} />
			{/* Componente DropCompanies para seleção da empresa do usuário */}

			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
			{/* Botão enviar com texto dinâmico dependendo se é uma atualização ou um novo usuário */}
		</form>
	)
}

// Exporta o componente Form como exportação padrão
export default Form
