const generator =
  Blockly.javascriptGenerator || Blockly.JavaScript;

// Output helper
function printOutput(msg) {
  const out = document.getElementById("output");
  out.textContent += msg + "\n";
}

// CREATE TASK
generator.forBlock["create_task"] = function (block) {
  const name = block.getFieldValue("TASK_NAME");
  const priority = block.getFieldValue("PRIORITY");

  return `
task = {
  name: "${name}",
  priority: "${priority}",
  deadline: null
};
printOutput("✅ Task created: ${name} (${priority})");
`;
};

// SET DEADLINE
generator.forBlock["set_deadline"] = function (block) {
  const days = block.getFieldValue("DAYS");
  return `
task.deadline = ${days};
printOutput("📅 Deadline set to ${days} days");
`;
};

// LOG TASK
generator.forBlock["log_task"] = function () {
  return `
printOutput(
  "📝 Task: " + task.name +
  " | Priority: " + task.priority +
  " | Deadline: " + task.deadline
);
`;
};

// CALCULATE ETA
generator.forBlock["calculate_eta"] = function () {
  return `
let factor =
  task.priority === "HIGH" ? 1 :
  task.priority === "MEDIUM" ? 1.5 : 2;

let eta = task.deadline * factor;
printOutput("⏱️ ETA: " + eta + " days");
`;
};

// END WORKFLOW
generator.forBlock["end_workflow"] = function () {
  return `
printOutput("✅ Workflow completed");
`;
};
