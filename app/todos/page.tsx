import DeleteButton from '@/components/delete-button';
import { addTodo } from '@/lib/actions';
import prisma from '@/lib/prisma';
import Link from 'next/link';

const Page = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <Link
        href="/todos/create"
        className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
      >
        新規追加
      </Link>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id} className='my-2'>
            <div className='flex gap-2'>
            <span>{todo.name}</span>
            <Link href={`/todos/${todo.id}`} className='text-blue-500'>詳細</Link>
            <Link href={`/todos/${todo.id}/edit`} className='text-green-600'>更新</Link>
            <DeleteButton id={todo.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;