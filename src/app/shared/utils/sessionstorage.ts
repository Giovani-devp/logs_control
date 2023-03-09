export class SessionStorageUtils {
  public obterUsuario() {
    return JSON.parse(sessionStorage.getItem('blite.user') || '{}');
  }

  public salvarDadosLocaisUsuario(response: any) {
    this.salvarTokenUsuario(response.accessToken);
    this.salvarUsuario(response.userToken);
  }

  public limparDadosLocaisUsuario() {
    sessionStorage.removeItem('blite.token');
    sessionStorage.removeItem('blite.user');
  }

  public obterTokenUsuarioSessionStorage() {
    return sessionStorage.getItem('user');
  }

  public salvarTokenUsuario(token: string) {
    sessionStorage.setItem('blite.token', token);
  }

  public salvarUsuario(user: string) {
    sessionStorage.setItem('blite.user', JSON.stringify(user));
  }
}
