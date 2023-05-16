import { NextPageContext } from 'next';
import { FILTER_HEADERS } from '../components/contants';

const LANG_MAP = {
  en_US: 'en-US',
  zh_CN: 'zh-CN',
};

const filterCustomHeader = (headers?: Record<string, string | string[] | undefined>): Record<string, string> => {
  if (!headers) return {};
  const _headers = {};
  for (const k in headers) {
    if (!FILTER_HEADERS.map(item => item.toUpperCase()).includes(k.toUpperCase())) {
      continue;
    }
    _headers[k] = headers[k];
  }
  return _headers;
};

export const getInitialProps = async(context: { ctx: NextPageContext }) => {
  const cookie = context.ctx.req?.headers.cookie;
  console.log('cookie in app',cookie);
  const filterHeaders = filterCustomHeader(context.ctx.req?.headers);

  const baseResponse = {
    // env: process.env.ENV,
    // version: process.env.WEB_CLIENT_VERSION,
  };

  const language = context.ctx.req?.headers['accept-language'];
  const headers: Record<string, string> = { ...filterHeaders };

  if (cookie) {
    headers.cookie = cookie;
  }

  if (language) {
    headers['Accept-Language'] = language;
  }

  return {
    ...baseResponse,
  
  };
};