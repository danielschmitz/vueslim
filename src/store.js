/**
 * O store.js é um arquivo usado pra guardar informações
 * globais de todo o sistema, persistindo os dados mesmo
 * se o usuário fechar o navegador e voltar.
 *
 * Aqui fica guardado o token de autenticação, id, nome e email
 * do usuário logado.
 *
 * O uso do get/set é necessário para ter a compatibilidade com localStorage
 *
 */
const store = {
  _email: '',
  set email (str) {
    this._email = str
    localStorage.setItem('email', str)
  },
  get email () {
    return this._email || localStorage.getItem('email')
  },
  _uid: '',
  set uid (str) {
    this._uid = str
    localStorage.setItem('uid', str)
  },
  get uid () {
    return this._uid || localStorage.getItem('uid')
  },
  _token: '',
  set token (str) {
    this._token = str
    localStorage.setItem('token', str)
  },
  get token () {
    return this._token || localStorage.getItem('token')
  },
  _nome: '',
  set nome (str) {
    this._nome = str
    localStorage.setItem('nome', str)
  },
  get nome () {
    return this._nome || localStorage.getItem('nome')
  },

  //
  // Métodos globais
  //

  /**
   * Verifica se o usuário está logado
   * @returns Boolean
   */
  isLogged () {
    return this.token !== ''
  },
  /**
   * Realiza o "login" do usuário. Na verdade apenas guarda a informação do token,
   * mas poderia realizar outras tarefas
   *
   * @param {string} token O token fornecido pelo servidor para realizar um acesso posterior
   */
  login (token) {
    this.token = token
  },
  /**
   * Realiza o logout do usuário
   */
  logout () {
    this.uid = ''
    this.name = ''
    this.token = ''
  }
}
export default store
