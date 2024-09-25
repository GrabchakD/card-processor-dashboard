import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {Client} from "../../model/Client";
import {ClientService} from "../../service/client.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../service/auth.service";
import {CardService} from "../../service/card.service";
import {OrderService} from "../../service/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Array<Client> = [];
  cardTypes: Array<string> = [];

  client: Client = new Client();

  updateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstNameUa: new FormControl(),
    lastNameUa: new FormControl(),
    firstNameEn: new FormControl(),
    lastNameEn: new FormControl(),
    birth: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    operatorFullName: new FormControl()
  });

  orderForm: FormGroup = new FormGroup({
    clientId: new FormControl(),
    firstNameUa: new FormControl(),
    lastNameUa: new FormControl(),
    firstNameEn: new FormControl(),
    lastNameEn: new FormControl(),
    cardType: new FormControl(),
    operatorFullName: new FormControl()
  });

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private authService: AuthService,
    private cardService: CardService,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.clientService.getAllClients()
      .subscribe(
        resp => {
          this.clients = resp.objects;
        }
      );

    this.cardService.getAllCardTypes()
      .subscribe(
        resp => {
          this.cardTypes = resp
        }
      );
  }

  openUpdateModal(content: TemplateRef<any>, client: Client) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.updateForm.patchValue({
      id: client.id,
      lastNameUa: client.lastNameUa,
      firstNameUa: client.firstNameUa,
      firstNameEn: client.firstNameEn,
      lastNameEn: client.lastNameEn,
      email: client.email,
      phone: client.phone,
      operatorFullName: client.operatorFullName,
      birth: client.birth
    })
  }

  update() {
    this.updateForm.value.operatorFullName = this.authService.getOperatorNameFormStorage()
    this.clientService.updateClients(this.updateForm.value, this.updateForm.value.id)
      .subscribe(resp => {
        this.ngOnInit();
        this.modalService.dismissAll();
      })
  }

  openCreateModal(content: TemplateRef<any>) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
  }

  save() {
    this.client.operatorFullName = this.authService.getOperatorNameFormStorage()
    this.clientService.createClients(this.client)
      .subscribe(resp => {
        this.ngOnInit();
        this.modalService.dismissAll();
      })
  }

  openOrderModal(contentOrder: TemplateRef<any>, client: Client) {
    this.modalService.open(contentOrder, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.orderForm.patchValue({
      clientId: client.id,
      lastNameUa: client.lastNameUa,
      firstNameUa: client.firstNameUa,
      firstNameEn: client.firstNameEn,
      lastNameEn: client.lastNameEn,
      operatorFullName: client.operatorFullName,
    })
  }

  createOrder() {
    this.orderForm.value.operatorFullName = this.authService.getOperatorNameFormStorage()
    this.orderService.createOrder(this.orderForm.value)
      .subscribe(resp => {
        this.ngOnInit();
        this.router.navigate(["/orders"]);
        this.modalService.dismissAll();
      });
  }
}
