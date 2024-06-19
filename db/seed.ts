import { db, Code } from 'astro:db';

export default async function() {
  await db.insert(Code).values([
    { code: "dskjf"},
    { code: "dfsdf"},
  ])
}