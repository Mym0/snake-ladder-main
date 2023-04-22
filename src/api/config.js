import axios from 'axios';
const token =
  'eyJraWQiOiJTY0VRV3NzVWpoODVuaGUweGR4X1c3ZWJmb2NxY0tfNU5YNjlYWW9rNGE4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkwza2lZOF80Smt5SFFVNzdleWxORFZyR3JKVEJTNXR5a1RFTndHUUNNa1UiLCJpc3MiOiJodHRwczovL2lkLm9jdG9sZWFybi5kZS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2ODE3MzcxNzIsImV4cCI6MTY4MTc0MDc3MiwiY2lkIjoiMG9hOGJzN2g0MTlYbDByY1k1ZDciLCJ1aWQiOiIwMHU3MGxnMDFramFTMnY4eTVkNyIsInNjcCI6WyJlbWFpbCIsIm9wZW5pZCIsInByb2ZpbGUiXSwiYXV0aF90aW1lIjoxNjgxMjM0NTQ3LCJzdWIiOiJtZWxnZW5keTQwQHlhaG9vLmNvbSJ9.NUzpKoA2OaAq5Fw6Cyh13XXNrRozwyOPX58QYIDVWvCmWgjLejdJ4y2KJLPCT4oGLIMwiP6zEZeWhrtz_UZQjM8XJvAFdsyz5k6yGmetkJKKSFAuNdSYruPxejk3XrWRt4ywKbkb-5SKI6SqPu0HP4mR59oRl-I2AD4U4G2Kp7cBoxZE3E476tvFZi-KsyN4SE-I6xiGDf7U5a1bECCJqd4x02pGZfI45bbojFsnW6d9xuS9CnYfUBIL5pGmm8pTaM1rbPwCFUecNnHCj4krzdIV9i9pbiCnrym7YxGHidLnswMDYaLLUiKiwTOOJMjRBiGJM9tMuSSHT3LUiPA3IA';
const baseUrl = 'https://app.octolearn.de/api/third-party/';
const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_API_SECRET;

const axoisInstance = () => {
  const userToken = localStorage.getItem('userToken');
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${userToken}`,
      apiKey,
      apiSecret,
    },
  });
};

export default axoisInstance;
