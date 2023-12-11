// Definindo uma função chamada httpHelper usando arrow function
export const httpHelper = () => {
	// Definindo uma função chamada customFetch
	const customFetch = async (url, options = {}) => {
		const defaultMethod = "GET"
		const defaultHeaders = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
		// Cria um novo AbortController para lidar com o cancelamento da solicitação
		const controller = new AbortController()
		options.signal = controller.signal

		// Definindo uma método padrão e os cabeçalhos da solicitação
		options.method = options.method || defaultMethod
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders
		
		// Converte o corpo da solicitação em JSON e trata o caso em que é falso
		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

		// Definindo um tempo limite para a solicitação e, se exceder 3.000 milissegundos, aborte a solicitação
		setTimeout(() => {
			controller.abort()
		}, 3000)

		//Tenta fazer a solicitação de busca e analisar a resposta como JSON
		try {
			const response = await fetch(url, options)
			return await response.json()

		//Se ocorrer um erro durante a busca, retorne o erro
		} catch (err) {
			return err
		}
	}

	// Definindo as funções auxiliares (get, post, put, del) usando customFetch com métodos HTTP específicos
	const get = (url, options = {}) => customFetch(url, options)

	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}

	// Retorna um objeto com as funções auxiliares definidas
	return {
		get,
		post,
		put,
		del,
	}
}
