import { db, Code } from 'astro:db';

// https://astro.build/db/seed
export default async function() {
	await db.insert(Code).values([
		{ codeL: 'XCVBN' }
	])
}
