// server Actions
'use server'

import { revalidatePath } from 'next/cache';

// 新規作成
export const addTodo = async (data: FormData) => {
  const name = data.get('name') as string
  await prisma.todo.create({ data: { name } })
  
  // キャッシュを更新
  revalidatePath('/todos')
}

// 削除
export const deleteTodo = async (id: number) => { 
  await prisma.todo.delete({ where: { id } })
  revalidatePath('/todos')
}