import {User} from "./user";

export class Report{
  constructor(
    public clientsCount?: number,
    public ordersCount?: number,
    public operators: Array<User> = []
  ) {}
}
