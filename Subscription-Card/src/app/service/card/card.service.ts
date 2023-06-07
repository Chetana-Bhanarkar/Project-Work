
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { card } from 'src/app/model/card.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private BASE_URL: string = environment.apiUrl;

  constructor(private http: HttpClient){}


  createCard(card : card) : Observable<Object>{
    return this.http.post(`${this.BASE_URL}`, card) ;
  }


  getCard():Observable<Object>{
    return this.http.get(`${this.BASE_URL}`)
  }
}
