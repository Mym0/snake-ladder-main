import axios from 'axios';
const token =
  'eyJraWQiOiJTY0VRV3NzVWpoODVuaGUweGR4X1c3ZWJmb2NxY0tfNU5YNjlYWW9rNGE4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkh1cF95VGY5V3FZVnc5WGxMMVJGcXg0aTlvT0YyQnRTdnRJaWlzekRDS0kiLCJpc3MiOiJodHRwczovL2lkLm9jdG9sZWFybi5kZS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2ODE1OTU3MDksImV4cCI6MTY4MTU5OTMwOSwiY2lkIjoiMG9hOGJzN2g0MTlYbDByY1k1ZDciLCJ1aWQiOiIwMHU3MGxnMDFramFTMnY4eTVkNyIsInNjcCI6WyJlbWFpbCIsIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNjgxMjM0NTQ3LCJzdWIiOiJtZWxnZW5keTQwQHlhaG9vLmNvbSJ9.DnmQy0W6zC3qRU6GICybIRqqKZU5ezibmVo5L3OCUTMl4UDW2mLKqTRZ9GXgePyarpicON_pMKtGAjukUf9f7LngxXnO0UpGSyftkiuoME942IJdXlGy8kZWsVU03rHymzkiRPGO28iUHv9WQew6ESLeCSJsSH4tUpl6y05ubT7uglYM4oMhXr7EDsKpJGixbacQBew6J57Z_uDhuX5GVBDaeTpCRUcnfzMmyu4qLTd-Zxhb-0hRZQnZjY0akHgUYKrC3Z8zzmrOpb_4X6wVrk4EkH3Zdf0SaRnGacGoCX8Mkq7UNlHR6TK7OoQL571LlL0iJrqEA-oMzioOtaXBww';
const baseUrl = 'https://app.octolearn.de/api/third-party/';
const apiKey = 'xxxx-aaaa-ccc-bbb-uuu';
const apiSecret = 'dddd-iii-qqqq-aaaa-xde';

const axoisInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    apiKey,
    apiSecret,
  },
});

export default axoisInstance;
