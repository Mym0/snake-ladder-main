import axoisInstance from './config';

const saveGameHighScoreApi = async (body) => {
  const url = 'record';
  const bodyExample = {
    record: '',
    additionalInformation: '',
  };

  try {
    const response = await axoisInstance.post(url, bodyExample);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default saveGameHighScoreApi;
