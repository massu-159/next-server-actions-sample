// server Actions
'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// 新規作成
export const addTodo = async (data: FormData) => {
  const name = data.get('name') as string
  await prisma.todo.create({ data: { name } })
  
  // キャッシュを更新
  revalidatePath('/todos')
  redirect('/todos');
}

// 更新
export const updateTodo = async (id: number, data: FormData) => {
  const name = data.get('name') as string;
  const isCompleted = data.get('isCompleted') as string;
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      isCompleted: isCompleted === 'true' ? true : false,
    },
  });
  revalidatePath('/todos');
  redirect('/todos');
};

// 削除
export const deleteTodo = async (id: number) => { 
  await prisma.todo.delete({ where: { id } })
  revalidatePath('/todos')
}