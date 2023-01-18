import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionStorageService {

  constructor() { }

  public saveData(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }
  public getData(key: string) {
    return sessionStorage.getItem(key)
  }
  public removeData(key: string) {
    sessionStorage.removeItem(key);
  }
  public clearData() {
    sessionStorage.clear();
  }

  public isLoggedIn(): boolean {
    const user = this.getData("session-mobile");
    if (user) {
      return true;
    }

    return false;
  }
}
