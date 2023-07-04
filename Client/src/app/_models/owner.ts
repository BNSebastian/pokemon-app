export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  gym: string;
}

export interface OwnerCreate {
  firstName: string;
  lastName: string;
  gym: string;
}
