import { RoleDTO } from "./role.dto";

export interface IPhoneDTO {
  type: string;
  number: string;
}

export interface CreateUserDTO {
  // το id το δημιουργεί η mongoDB
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string; 
  };
  phone?: IPhoneDTO[];
  roles?: string[];
}

export interface UpdateUserDTO {
  // username: string; είναι unique δεν γίνεται update
  password: string;
  firstname?: string;
  lastname?: string;
//   email?: string; είναι unique δεν γίνεται update
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string; 
  };
  phone?: IPhoneDTO[];
  roles?: string[];
}


export interface UserResponseDTO {
  id: string;
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string; 
  };
  phone?: IPhoneDTO[];
  roles?: string[];
}