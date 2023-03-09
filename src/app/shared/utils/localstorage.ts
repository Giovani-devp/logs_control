export class LocalStorageUtils {
  public obterUsuario() {
    return JSON.parse(localStorage.getItem('blite.user') || '{}');
  }

  public salvarDadosLocaisUsuario(response: any) {
    this.salvarTokenUsuario(response.accessToken);
    this.salvarUsuario(response.userToken);
  }

  public limparDadosLocaisUsuario() {
    localStorage.removeItem('blite.token');
    localStorage.removeItem('blite.user');
  }

  public obterTokenUsuarioSessionStorage() {
    return sessionStorage.getItem('user');
  }

  public obterTokenUsuarioLocalStorage() {
    return localStorage.getItem('user');
  }

  public salvarTokenUsuario(token: string) {
    localStorage.setItem('blite.token', token);
  }

  public salvarUsuario(user: string) {
    localStorage.setItem('blite.user', JSON.stringify(user));
  }
}
