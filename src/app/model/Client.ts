export class Client {
  id?: number;
  firstNameUa?: string;
  lastNameUa?: string;
  firstNameEn?: string;
  lastNameEn?: string;
  birth?: Date;
  phone?: string;
  email?: string;
  operatorFullName?: string;

  constructor(
    id?: number,
    firstNameUa?: string,
    lastNameUa?: string,
    firstNameEn?: string,
    lastNameEn?: string,
    birth?: Date,
    phone?: string,
    email?: string,
    operatorFullName?: string
  ) {
    this.id = id;
    this.firstNameUa = firstNameUa;
    this.lastNameUa = lastNameUa;
    this.firstNameEn = firstNameEn;
    this.lastNameEn = lastNameEn;
    this.birth = birth;
    this.phone = phone;
    this.email = email;
    this.operatorFullName = operatorFullName;
  }
}
