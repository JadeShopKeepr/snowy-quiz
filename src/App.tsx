import { getStartQuestionId } from './contentful/contentful';
import { Button, Typography } from './components';
import { useNavigate } from 'react-router';

import styles from './App.module.css';

function App() {
  const navigate = useNavigate();
  const handleStart = async () => {
    try {
      const firstQuestionId = await getStartQuestionId();
      navigate(`/question/${firstQuestionId}`);
    } catch (error) {
      console.error('', error);
    }
  };
  return (
    <div className={styles.container}>
      <Typography variant='title' tag='h1'>
        Multi-Step Quiz
      </Typography>
      <Button variant='submit' onClick={handleStart}>
        <Typography variant='subtitle' tag='p'>
          Start
        </Typography>
      </Button>
    </div>
  );
}

export default App;
