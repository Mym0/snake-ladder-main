import axoisInstance from './config';

const getGameHighScoreApi = async () => {
  const url = 'learning-content-folders';

  try {
    const response = await axoisInstance.get(url);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getGameHighScoreApi;
