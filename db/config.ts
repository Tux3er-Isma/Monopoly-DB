import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Code = defineTable({
  columns: {
    code: column.text()
  }
})

export default defineDb({
  tables: { Code }
});
