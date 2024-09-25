import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Report} from "../model/Report";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) {
  }

  public getStatistic(): Observable<Report> {
    return this.http.get<Report>('http://localhost:8080/api/v1/statistic');
  }

  public generateCsv(operators: Array<User>): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/octet-stream'
    });

    return this.http.post<Blob>('http://localhost:8080/api/v1/statistic', operators, {
      headers: headers,
      responseType: 'blob' as 'json'
    });
  }
}
