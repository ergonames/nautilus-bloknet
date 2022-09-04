import { MAINNET } from "./ergo";

export const API_URL = MAINNET
  ? "https://api.ergoplatform.com"
  : "http://69.164.215.107:8080";
export const ADDRESS_URL = MAINNET
  ? "https://explorer.ergoplatform.com/en/addresses/"
  : "http://69.164.215.107:3000/en/addresses/";
export const TRANSACTION_URL = MAINNET
  ? "https://explorer.ergoplatform.com/en/transactions/"
  : "http://69.164.215.107:3000/en/transactions/";
