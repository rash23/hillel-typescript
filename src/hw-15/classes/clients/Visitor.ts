import { IVisitor } from '../../types/clients';

export class Visitor implements IVisitor {
  name: string;
  contact: string;

  constructor(name: string, contact: string) {
    this.name = name;
    this.contact = contact;
  }
}
