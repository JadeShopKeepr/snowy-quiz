import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { getQuestion } from '../../contentful/contentful';
import { Button, Typography, ProgressBar, AnswerCard } from '../../components';
import type { QuestionData, AnswerBase } from '../../types/types';
import styles from './Question.module.css';

interface QuestionProps {
  allSelectedAnswers: AnswerBase[];
  setAllSelectedAnswers: React.Dispatch<React.SetStateAction<AnswerBase[]>>;
}

export const Question = ({ setAllSelectedAnswers }: QuestionProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = React.useState<QuestionData>();
  const [loading, setLoading] = React.useState(true);
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    if (!id) return;

    setLoading(true);
    getQuestion(id)
      .then((res) => {
        setData(res);
        setSelectedIds(new Set());
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleSelect = (answerId: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(answerId)) newSet.delete(answerId);
    else newSet.add(answerId);
    setSelectedIds(newSet);
  };

  const handleNext = () => {
    if (!data) return;
    const selectedAnswers = data.possibleAnswers.filter((ans) => selectedIds.has(ans.sys!.id!));
    setAllSelectedAnswers((prev) => [...prev, ...selectedAnswers]);
    if (!data.nextId) {
      navigate('/results');
    } else {
      navigate(`/question/${data.nextId}`);
    }
  };

  if (loading)
    return (
      <Typography variant='title' tag='h1'>
        Завантаження...
      </Typography>
    );

  if (!data)
    return (
      <Typography variant='title' tag='h1'>
        Дані відсутні
      </Typography>
    );

  return (
    <div className={styles.qPage}>
      <div className={styles.container}>
        <ProgressBar current={data.currentIndex} total={data.total} />

        <Typography variant='title' tag='h2'>
          {data.questionTitle}
        </Typography>

        <div className={styles.answersContainer}>
          {data.possibleAnswers.map((ans) => (
            <AnswerCard key={ans.sys!.id} answer={ans} active={selectedIds.has(ans.sys!.id!)} onClick={() => handleSelect(ans.sys!.id!)} />
          ))}
        </div>

        <div className={styles.buttonsContainer}>
          <Button variant='previous' onClick={() => navigate(-1)} disabled={!data.prevId}>
            <Typography variant='subtitle' tag='p'>
              Prev
            </Typography>
          </Button>

          <Button variant='next' onClick={handleNext}>
            <Typography variant='subtitle' tag='p'>
              Next
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
