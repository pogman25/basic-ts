import { IUsers } from '../duck/interfaces';

interface IUserFullModel extends IUsers {
  stack: IUserStack[];
}

export interface IUserProps {
  users: IUserFullModel[];
  getUsers: () => void;
}

export interface IUserStack {
  id: number;
  icon: string;
  stack: string;
  points: string;
}
