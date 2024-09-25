import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pageable} from "../model/Pageable";
import {Client} from "../model/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getAllClients(): Observable<Pageable<Client>> {
    return this.http.get<Pageable<Client>>('http://localhost:8080/api/v1/clients');
  }

  public createClients(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/api/v1/clients', client);
  }

  public updateClients(client: Client, id: number): Observable<Client> {
    return this.http.put<Client>('http://localhost:8080/api/v1/clients/' + id, client);
  }
}
