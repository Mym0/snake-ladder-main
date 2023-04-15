import axoisInstance from './config';

const replyToQuestionApi = async (body) => {
  const url = '';
  const bodyExample = {
    answer: '3.0',
    frontendContent: {
      answer: '3.0',
      examPreparationMode: false,
      id: 1201,
      learningLevel: 0,
      learningMode: 'Arithmetic',
      queryFormat: 'MultipleChoice',
      question: '1+2',
      wrongAnswers: null,
      learningLevelShallBeChanged: false,
    },
  };

  try {
    const response = await axoisInstance.put(url, bodyExample);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default replyToQuestionApi;
