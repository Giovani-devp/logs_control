export interface dataLogs {
  data?: resultsData[],
  traceId?: string,
  at?: string,
};

export interface resultsData {
  page?: number,
  itensPerPage?: number,
  totalItens?: number,
  maxPages?: number,
  results?: any,
};

export interface logs1 {
  at?: string,
  level?: string,
  message?: string,
  context?: string,
  contexData?: contexData1,
};

export interface contexData1 {
  method?: string,
  route?: string,
  payload?: payload1,
};

export interface payload1 {
  queueMessageId?: string,
  clientApiKey?: string,
  queue?: number,
  message?: string,
  response?: string,
  traceId?: string,
  isSuccess?: boolean,
};

export interface logs2 {
  at?: string,
  level?: string,
  message?: string,
  context?: string,
  contexData?: contexData2,
};

export interface contexData2 {
  command?: string,
  handler?: string,
  data?: dataContex,
};

export interface dataContex {
  queueMessageId?: string,
  clientApiKey?: string,
  queue?: number,
  attempt?: attemptI
};

export interface attemptI {
  message?: string,
  response?: string,
  isSuccess?: number,
  traceId?: string
};

export interface logs3 {
  at?: string,
  level?: string,
  message?: string,
  context?: string,
  contexData?: contexData3,
};

export interface contexData3 {
  message?: string,
  type?: number
}

export interface logs4 {
  at?: string,
  level?: string,
  message?: string,
  context?: string,
  contexData?: contexData4,
};

export interface contexData4 {
  statusCode?: number,
  ms?: number
};