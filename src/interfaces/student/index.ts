import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  name: string;
  school_id?: string;
  created_at?: any;
  updated_at?: any;

  school?: SchoolInterface;
  _count?: {};
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  school_id?: string;
}
