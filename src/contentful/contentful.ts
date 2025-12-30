export async function getQuestion(id: string) {
  const SPACE_ID = 'h5yuo46ubep2';
  const ACCESS_TOKEN = 'xht8tHFxAY7S5aDuzFO2jxLMr84xNWPlIwmwVHBO4Pw';

  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=steps&include=4`;

  const res = await fetch(url);
  const data = await res.json();

  const allSteps = data.items.sort((a: any, b: any) => (a.fields.stepNumber || 0) - (b.fields.stepNumber || 0));

  const stepIndex = allSteps.findIndex((s: any) => s.fields?.listOfQuestionsForTheStep?.some((q: any) => q.sys.id === id));

  if (stepIndex === -1) throw new Error('Крок не знайдено');

  const currentStep = allSteps[stepIndex];
  const questionsInStep = currentStep.fields.listOfQuestionsForTheStep || [];

  const questionIndexInStep = questionsInStep.findIndex((q: any) => q.sys.id === id);
  const currentQuestionLink = questionsInStep[questionIndexInStep];

  const currentQuestion = data.includes?.Entry?.find((e: any) => e.sys.id === currentQuestionLink.sys.id) || currentQuestionLink;

  const resolvedAnswers =
    currentQuestion.fields?.possibleAnswers?.map((ansLink: any) => {
      return data.includes?.Entry?.find((entry: any) => entry.sys.id === ansLink.sys.id) || ansLink;
    }) || [];

  let nextId = null;
  let prevId = null;

  if (questionIndexInStep < questionsInStep.length - 1) {
    nextId = questionsInStep[questionIndexInStep + 1]?.sys.id;
  } else {
    const nextStep = allSteps[stepIndex + 1];
    nextId = nextStep?.fields?.listOfQuestionsForTheStep?.[0]?.sys?.id || null;
  }

  if (questionIndexInStep > 0) {
    prevId = questionsInStep[questionIndexInStep - 1]?.sys.id;
  } else {
    const prevStep = allSteps[stepIndex - 1];
    const prevStepQuestions = prevStep?.fields?.listOfQuestionsForTheStep || [];
    prevId = prevStepQuestions[prevStepQuestions.length - 1]?.sys?.id || null;
  }

  return {
    questionTitle: currentQuestion.fields?.title,
    possibleAnswers: resolvedAnswers,
    currentIndex: stepIndex,
    total: allSteps.length,
    nextId,
    prevId,
  };
}

export async function getStartQuestionId() {
  const SPACE_ID = 'h5yuo46ubep2';
  const ACCESS_TOKEN = 'xht8tHFxAY7S5aDuzFO2jxLMr84xNWPlIwmwVHBO4Pw';

  const url2 = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=steps&order=fields.stepNumber`;

  const res = await fetch(url2);
  const data = await res.json();

  const firstStep = data.items[0];

  if (!firstStep || !firstStep.fields.listOfQuestionsForTheStep) {
    throw new Error('Початковий крок не знайдено');
  }

  return firstStep.fields.listOfQuestionsForTheStep[0].sys.id;
}
