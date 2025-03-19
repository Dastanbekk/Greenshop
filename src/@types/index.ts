export interface ComponentType {
  children: React.ReactNode;
}

export interface FieldType {
  email?: string;
  password?: string;
}

export interface CategoryTypes {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: number;
}

export interface QueryType<T> {
  isError: boolean;
  isPending: boolean;
  data?: T;
}
