// JSON FILE
{
  {".."},
  {".."},
  {".."},
}
// JSON FILE

// JS FILE instead
  const tasks = [
    {...},
    {...},
    {...},
    {...},
  ]

  module.exports = tasks
// 

const tasks = require("../tasks")


router.get("/tasks", (req,res) => {
  // fs.readFile("...")

  tasks[1]
})

router.post("/tasks", (req,res) => {
  tasks.push(...)
})