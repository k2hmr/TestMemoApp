import { Memo } from '../../types/Memo';

interface Props {
  memo: Memo;
};

export const MemoItem: React.FC<Props> = ({ memo }) => {
  return (
    <li className='flex items-center justify-between p-4'>
      <p className='text-gray-500'>
        {memo.id}: {memo.title}
      </p>
      <div className='flex space-x-4'>
        <button className='rounded border-2 p-2 text-gray-500'>Edit</button>
        <button className='rounded border-2 p-2 text-gray-500'>Remove</button>
      </div>
    </li>
  );
};