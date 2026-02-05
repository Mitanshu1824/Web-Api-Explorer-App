export interface ApiInfo {
  title: string;
  description?: string;
  version?: string;
  contact?: {
    name?: string;
    email?: string;
    url?: string;
  };
  "x-logo"?: {
    url?: string;
  };
}

export interface ApiDetails {
  info: ApiInfo;
  swaggerUrl?: string;
}

export type ApiMap = Record<string, ApiDetails>;
