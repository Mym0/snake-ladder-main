import axoisInstance from './config';

const getNewQuestionApi = async (numberOfNeededQuestions) => {
  const url = 'next-relevant-questions';
  const params = {
    numberOfNeededQuestions: numberOfNeededQuestions,
  };

  try {
    const response = await axoisInstance.get(url, {
      params: params,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getNewQuestionApi;
