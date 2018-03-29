import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(private http:HttpClient) { }

  get(){
  	return this.http.get(`/api/v1/cards.json`);
  }

  add(payload){
  	return this.http.post(`/api/v1/cards.json`, {text:payload.trim()});
  }

  remove(payload){
  	return this.http.delete(`/api/v1/cards/${payload.id}.json`);
  }

  update(payload){
  	return this.http.patch(`/api/v1/cards/${payload.id}.json`, payload)
  }

}
