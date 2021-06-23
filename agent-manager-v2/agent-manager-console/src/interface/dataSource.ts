
import { IAgentParam } from '../api';

export interface IKeyValue {
  key: number;
  value: string;
}

export interface IDataSourceQueryFormColumns {
  logAgentVersionTaskTypes: number[];
  serviceId: number[];
  logAgentVersionTaskHealthLevels: number[];
  logAgentVersionTaskIdOrName: string;
  locAgentVersionTaskCreateTime: moment.Moment[],
}

export interface IDataSourceParams extends IAgentParam {
  limitFrom?: number;
  limitSize?: number;
  serviceName?: string;
  servicename?: string;
  serviceCreateTimeStart?: any;
  hostIdList?: any;
  id?: number;
}
export interface IDataSourceVo {
  pageNo: number; // 当前第几页
  pageSize: number; // 每页记录行数
  resultSet: IDataSource[];
  total: number;
  id?: number;
  hostList?: IDataSource[];
}

export interface IDataSource {
  servicename: string;
  serviceCreateTimeStart: number;
  hostIdList?: any;
  id?: number;
}

export interface IApp {
  serviceName: string;
  hostList?: any;
}

export interface ILogDataSource {
  id: number; // 主机名称
}

export interface ILogDataSourcePath {
  charset: string; // 
}

export interface IHostDetail {
  container: number; // 主机类型 0：主机 1：容器
  department: string; // 主机所属部门
  id: number; // 主机id
  hostName: string; // 主机名
  ip: string; // 主机ip
  machineZone: string; // 主机所属机器单元
  parentHostName: string; // 针对容器场景，表示容器对应宿主机名
}
