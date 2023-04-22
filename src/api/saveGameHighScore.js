import axiosInstance from './config';

const saveGameHighScoreApi = async (body) => {
  const url = 'record';
  const bodyExample = {
    record: '',
    additionalInformation: '',
  };

  try {
    const response = await axiosInstance().post(url, bodyExample);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default saveGameHighScoreApi;
