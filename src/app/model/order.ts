import {User} from "./user";

export class Order {
  constructor(
    public id?: number,
    public created?: Date,
    public clientId?: number,
    public firstNameUA?: string,
    public lastNameUA?: string,
    public firstNameEN?: string,
    public lastNameEN?: string,
    public cardType?: string,
    public cardNumber?: string,
    public operator?: User,
    public operatorFullName?: string) {
  }
}
