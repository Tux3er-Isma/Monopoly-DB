import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Code = defineTable({
  columns: {
    codeL: column.text()
  }
})

export default defineDb({
  tables: { Code }
});
