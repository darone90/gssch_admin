import axios, { AxiosInstance } from 'axios';
import { AuthDTO } from './DTO';

class User {
  private axios: AxiosInstance
  constructor(api:string) {
    this.axios = axios.create({
      baseURL: api + '/users',
      withCredentials: true
    })
  }
  async authMe():Promise<AuthDTO> {
    const { data } = await this.axios.get('/');
    return data as AuthDTO; 
  }
  async login(login:string, password:string):Promise<AuthDTO>{
    const { data } = await this.axios.post('/', {login, password});
    return data as AuthDTO;
  }
  async logout():Promise<AuthDTO>{
    const data:AuthDTO = await this.axios.get('/logout');
    return data;
  }
  async changePassword(login:string, password:string, newValue:string):Promise<AuthDTO>{
    const data:AuthDTO = await this.axios.patch('/password', {login, password, newValue});
    return data
  };
  async changeLogin(login:string, password:string, newValue:string):Promise<AuthDTO>{
    const data:AuthDTO = await this.axios.patch('/login', {login, password, newValue});
    return data
  }
}

export default User;