import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../service/auth.service";
import {Card} from "../../model/Card";
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Array<Card> = [];

  card: Card = new Card();

  updateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    type: new FormControl(),
    bin: new FormControl(),
    status: new FormControl(),
    operatorFullName: new FormControl()
  });

  constructor(
    private cardService: CardService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.cardService.getAllCards()
      .subscribe(
        resp => {
          this.cards = resp.objects;
        });
  }

  openUpdateModal(content: TemplateRef<any>, card: Card) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.updateForm.patchValue({
      id: card.id,
      type: card.type,
      bin: card.bin,
      status: card.status,
      operatorFullName: card.operatorFullName
    })
  }

  update() {
    this.updateForm.value.operatorFullName = this.authService.getOperatorNameFormStorage()
    this.cardService.updateCard(this.updateForm.value, this.updateForm.value.id)
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
    this.card.operatorFullName = this.authService.getOperatorNameFormStorage()
    console.log(this.card)
    this.cardService.createCard(this.card)
      .subscribe(resp => {
        this.ngOnInit();
        this.modalService.dismissAll();
      })
  }
}
