import { EntriesQuery, TemplateContentsQuery } from '@graphql-types';

export type AllDataQuery = {
  path: string;
  location: {
    pathname: string;
    search: string;
    hash: string;
    href: string;
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    state: null;
    key: string;
  };
  pageResources: {
    json: {
      data: EntriesQuery;
      pageContext: Record<string, unknown>;
    };
    page: {
      componentChunkName: string;
      path: string;
      webpackCompilationHash: number;
      staticQueryHashes: number[];
    };
    staticQueryResults: Record<string, unknown>;
    uri: string;
    data: EntriesQuery;
    pageContext: Record<string, unknown>;
    params: Record<string, unknown>;
  };
};

export type BlogContentQuery = {
  path: string;
  location: {
    pathname: string;
    search: string;
    hash: string;
    href: string;
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    state: null;
    key: string;
  };
  pageResources: {
    json: {
      data: TemplateContentsQuery;
      pageContext: Record<string, unknown>;
    };
    page: {
      componentChunkName: string;
      path: string;
      webpackCompilationHash: number;
      staticQueryHashes: number[];
    };
    staticQueryResults: Record<string, unknown>;
    uri: string;
    data: TemplateContentsQuery;
    pageContext: Record<string, unknown>;
    params: Record<string, unknown>;
  };
};
