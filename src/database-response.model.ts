export interface DatabaseResponse<T> {
  error: DatabaseError;
  data?: T;
}

export interface DatabaseError {
  code?: number;
  message: string;
}

export interface ReadResponse {
  uid: string;
  [x: string]: any;
}

export interface CreateResponse {
  uid: string;
  createTime: Date;
  [x: string]: any;
}

export interface UpdateResponse {
  uid: string;
  updateTime: Date;
  [x: string]: any;
}

export interface MysqlSuccess {
  fieldCount: number;
  affectedRows: number;
  uid: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  changedRows: 1;
}
