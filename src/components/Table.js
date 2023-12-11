// importando o React e o Form 
import React from "react"
import Form from "./Form"

// Definindo um componente funcional chamado Table, recebendo props (users, postUser, updateUser, deleteUser)
const Table = ({ users, postUser, updateUser, deleteUser }) => {

	// Definindo uma função chamada showUpdateUser com parâmetro id
	const showUpdateUser = id => {
		// pegando os elementos com a classe show-form-{id} e alterna a classe hide-form no primeiro elemento
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	// Definindo um componente funcional chamado Row, recebendo props (user)
	const Row = ({ user }) => {
		// retornando JSX que o componente Row irá renderizar
		return (
			<>
				<div className='row'>
					{/* Contêiner para exibir informações do usuário: nome, email e telefone */}
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.companies.name}</div>
					{/* Contêiner para botões */}
					<div className='buttons'>
						{/* Botão para acionar a exibição do formulário de atualização */}
						<button onClick={() => showUpdateUser(user.id)}>Update</button>
						{/* Botão para deletar o usuário */}
						<button onClick={() => deleteUser(user.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} />
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			{/* Contêiner para toda a tabela */}
			<div className='titles'>
				{/* colunas: name, email, phone, company e actions */}
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
		</div>
	)
}

// Exporta o componente Tabela como exportação padrão
export default Table
