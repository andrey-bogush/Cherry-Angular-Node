import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../modules/config.model';
@Injectable()
export class ContactsService {
  token;
  header;
  table_name = 'contacts';
  constructor(
    private http: HttpClient
  ) {
    this.token = localStorage.getItem('token');
    this.header = new HttpHeaders({ 'token': this.token });
   }

  getContacts() {
    // return this.http.get(config.baseURL + 'remote/getUsers', { headers: this.header });
    return this.http.get(config.baseURL + 'api/' + this.table_name , {headers : this.header});
  }

  getContact(contactId) {
    return this.http.get(config.baseURL + 'api/' + this.table_name + '/' + contactId, { headers: this.header });
  }

  delete(id) {
    return this.http.delete(config.baseURL + 'api/' + this.table_name + '/' + id, { headers: this.header });
  }

  getUserProfile(userId) {
    return this.http.get(config.baseURL + 'remote/getUserProfile/' + userId, { headers: this.header });
  }

  getUserPhotos(userId) {
    return this.http.get(config.baseURL + 'remote/getUserPhotos/' + userId, { headers: this.header });
  }

  getUserProductPayment(userId) {
    return this.http.get(config.baseURL + 'remote/getUserProductPayment/' + userId, { headers: this.header });
  }

  getUserSocialData(userId) {
    return this.http.get(config.baseURL + 'remote/getUserSocialData/' + userId, { headers: this.header });
  }

  getUserInterest(userId) {
    return this.http.get(config.baseURL + 'remote/getUserInterest/' + userId, { headers: this.header });
  }

  getUserInterestHobby(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestHobby/' + id, { headers: this.header });
  }

  getUserInterestGame(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestGame/' + id, { headers: this.header });
  }

  getUserInterestMusic(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestMusic/' + id, { headers: this.header });
  }

  getUserInterestSport(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestSport/' + id, { headers: this.header });
  }

  getUserInterestFood(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestFood/' + id, { headers: this.header });
  }

  getUserInterestDrink(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestDrink/' + id, { headers: this.header });
  }

  getUserInterestBook(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestBook/' + id, { headers: this.header });
  }

  getUserInterestMovie(id) {
    return this.http.get(config.baseURL + 'remote/getUserInterestMovie/' + id, { headers: this.header });
  }

  updateContact(contactId, contactData) {
    return this.http.put(config.baseURL + 'api/' + this.table_name + '/' + contactId, contactData, { headers: this.header });
  }

  updateByUserId(userId, contactData) {
    return this.http.put(config.baseURL + 'api/contactsupdate/' + userId, contactData);
  }

}
