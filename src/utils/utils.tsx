import axios from 'axios';
import addOAuthInterceptor from 'axios-oauth-1.0a';

const consumerSecret = process.env.CONSUMER_SECRET;
const consumerKey = process.env.CONSUMER_KEY;

export const url = process.env.URL;
if (!consumerKey || !consumerSecret || !url) {
  throw new Error('Brak danych uwierzytelniających do API');
}

export const client = axios;
interface OptionsAuth {
  algorithm: 'HMAC-SHA1' | 'HMAC-SHA256';
  key: string;
  secret: string;
}
const options: OptionsAuth = {
  algorithm: 'HMAC-SHA1',
  key: consumerKey,
  secret: consumerSecret,
};

addOAuthInterceptor(client, options);
