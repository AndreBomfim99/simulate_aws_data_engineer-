// ============================================================
// HOW TO ADD NEW TASK CONTENT:
// 1. Create a new file: src/theory/task-1-2.js
// 2. Follow the same structure as task-1-1.js
// 3. Import and add it to the array below — done!
// ============================================================

import task11 from './task-1-1'
// import task12 from './task-1-2'
// import task13 from './task-1-3'
// ... add more as you create them

const allTasks = [
  task11,
  // task12,
  // task13,
]

export const getTask = (domainId, taskId) => {
  return allTasks.find(t => t.domain === domainId && t.id === taskId) || null
}

export default allTasks
