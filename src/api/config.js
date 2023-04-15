import axios from "axios";
const token = 'eyJraWQiOiJTY0VRV3NzVWpoODVuaGUweGR4X1c3ZWJmb2NxY0tfNU5YNjlYWW9rNGE4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmM2RHRxOXZMMWk4cF9SMlo0WG81ekJ2WmJIempXRHZFbTVkQnAwQ0NRRHMiLCJpc3MiOiJodHRwczovL2lkLm9jdG9sZWFybi5kZS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2ODEyMzQ1NDksImV4cCI6MTY4MTIzODE0OSwiY2lkIjoiMG9hOGJzN2g0MTlYbDByY1k1ZDciLCJ1aWQiOiIwMHU3MGxnMDFramFTMnY4eTVkNyIsInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNjgxMjM0NTQ3LCJzdWIiOiJtZWxnZW5keTQwQHlhaG9vLmNvbSJ9.UwoOg8f-KgFRsuuzmMv0yJ5BIxN8xbMXrozXpWd0Ph20Z9spbtK_O5uGUx55m1hT01MARxv6-jrtEwE2E9v7gDn19X9lKk2_JGg1pHa4JTwA3S0ax0KNmRZz1JDTL_Pt_cGM8LhVoJdDsUx66SpxjEiBWEVuu8nlgJInVC1DPFiCXZhObIbXwwAGadRjMaEg7W-ZXUdaC6neKjjco251Eij1_B6EnNpydS1KsdCmML9NIyyVUMejwqV4fIZ3xvHYahoz2cJytXVK49_3lLEW0YL2iQhfFKTH1mEROYkrsSsTCbXTp6VQPQIjQm4HzPVVqovNJCcUTkh3nSnN3fw9MQ'
export default axios.create({
    baseURL:'http://localhost:3000',
    headers: {
        'Authorization': 'Bearer '+token,
        'apiKey': 'xxxx-aaaa-ccc-bbb-uuu',
        'apiSecret': 'dddd-iii-qqqq-aaaa-xde'
    }
});

