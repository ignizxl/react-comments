// importando o componente LogoIcon do diretório "./assets/icons". As chaves indicam que apenas o LogoIcon  está sendo importado do módulo. 
import { LogoIcon } from "./assets/icons"

// importa o CrudUser do diretório "./components". O CrudUser é um componente personalizado para lidar com operações CRUD relacionadas aos usuários.
import CrudUser from "./components/CrudUser"

// importando os estilos do arquivo "./styles/App.css". Os estilos são aplicados aos componentes do componente App.
import "./styles/App.css"

// declarando um componente funcional chamado App
function App() {
	
	// marca o início do código JSX que o componente App irá renderizar
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
					{/* O componente LogoIcon sendo usado aqui. O conteúdo e a funcionalidade reais LogoIcon estão no componente importado. */}
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			<main>
				{/* CrudUser está sendo usado na seção main da página. */}
				<CrudUser />
			</main>
		</>
	)
}

export default App

// este código define um componente React "App" que serve como componente principal da aplicação. Inclui um cabeçalho com um logotipo e conteúdo principal que consiste no CrudUser, que lida com operações CRUD relacionadas ao usuário. A estilização do componente é importado de um arquivo CSS externo.