// fazendo as importações do useState e useEffect
import React, { useState, useEffect } from "react"
// fazendo a importação httpHelper
import { httpHelper } from "../helpers/httpHelper"

// Definindo um componente funcional chamado DropCompanies, recebendo props (companiesId, handleValue)
const DropCompanies = ({ companiesId, handleValue }) => {
	// Estado para armazenar a lista de empresas
	const [companies, setCompanies] = useState(null)
	// Estado para armazenar a empresa selecionada
	const [company, setCompany] = useState(companiesId)

	// Endpoint da API para buscar empresas
	const url = "http://localhost:5000/companies"
	//Instância da função httpHelper
	const api = httpHelper()

	// Gancho de efeito para buscar empresas quando o componente é montado
	useEffect(() => {
		api
			.get(url)
			//Se a requisição for bem sucedida
			.then(res => {
				// Define a lista de empresas, incluindo uma opção padrão "Selecionar Empresa"
				setCompanies([{ id: 0, name: "Select Company" }, ...res])
			})
			// Registra quaisquer erros que ocorram durante a solicitação
			.catch(err => console.log(err))
	}, []) // Matriz de dependência vazia significa que este efeito é executado uma vez quando o componente é montado

	// Se as empresas ainda não foram buscadas, retorne null
	if (!companies) return null


	return (
		<select
			name='companiesId'
			value={company}
			// Manipulador de eventos para alterações na empresa selecionada
			onChange={e => {
				//Atualiza o estado da empresa selecionada
				setCompany(e.target.value)
				// Chama a função handleValue passada como prop
				handleValue(e)
			}}
		>
			{companies.map(c => (
				// Mapeie a lista de empresas para criar elementos <option>
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			))}
		</select>
	)
}
// Exporta o componente DropCompanies como exportação padrão
export default DropCompanies
