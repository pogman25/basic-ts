interface IMentor {
  id: number;
  firstname: string;
  lastname: string;
  image: string;
}

interface IProject {
  id: number;
  name: string;
  icon: string;
  isWorking: boolean;
}

export interface IUsers {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  date_add: string;
  date_update: string;
  image: string;
  phone: string;
  telegram: string;
  email: string;
  salary: string;
  mentor: IMentor;
  active: true;
  english: string;
  location: string;
  manager: IMentor;
  stack: { id: number; points: string }[];
  projects: IProject[];
}

export interface IUserReducer {
  isFetching: boolean;
  usersByIds: { [key: string]: IUsers };
  usersIds: number[];
}
