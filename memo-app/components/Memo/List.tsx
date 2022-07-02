import { MemoItem } from './Item';
import { Memo } from '../../types/Memo';

interface Props {
  memos: Memo[];
};

export const MemoList: React.FC<Props> = ({ memos }) => {
  return (
    <div>
      <ul className='divide-y divide-gray-300'>
        {memos.map((memo) => (
          <MemoItem memo={memo} key={memo.id} />
        ))}
      </ul>
    </div>
  );
};