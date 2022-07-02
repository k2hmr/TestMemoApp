import type { NextPage } from 'next'
import { MemoHeader, MemoInput, MemoList } from '../components/Memo';

const Home: NextPage = () => {
  const memos = [
    { id: 1, title: 'memo1', createdAt: '2022-07-02' },
    { id: 2, title: 'memo2', createdAt: '2022-07-02' },
  ];

  return (
    <>
      <MemoHeader />
      <MemoInput />
      <MemoList memos={memos} />
    </>
  );
}

export default Home
