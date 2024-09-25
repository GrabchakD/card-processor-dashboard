import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pageable} from "../model/Pageable";
import {Card} from "../model/Card";
import {Client} from "../model/Client";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) {
  }

  public getAllCards(): Observable<Pageable<Card>> {
    return this.http.get<Pageable<Card>>('http://localhost:8080/api/v1/cards');
  }

  public getAllCardTypes(): Observable<Array<string>> {
    return this.http.get<Array<string>>('http://localhost:8080/api/v1/cards/types');
  }

  public createCard(card: Card): Observable<Card> {
    return this.http.post<Card>('http://localhost:8080/api/v1/cards', card);
  }

  public updateCard(card: Card, id: number): Observable<Client> {
    return this.http.put<Client>('http://localhost:8080/api/v1/cards/' + id, card);
  }
}
