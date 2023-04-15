import axoisInstance from './config';

const getUserInformationApi = async () => {
  const url = 'account';

  try {
    const response = await axoisInstance.get(url);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getUserInformationApi;
