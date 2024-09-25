import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/order";
import {Pageable} from "../model/Pageable";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  public getAllOrders(): Observable<Pageable<Order>> {
    return this.http.get<Pageable<Order>>('http://localhost:8080/api/v1/orders');
  }

  public createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:8080/api/v1/orders', order);
  }

  public generateCardNumbers(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/api/v1/orders/generate-card-numbers');
  }
}
