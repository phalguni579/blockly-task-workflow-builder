let workspace;

const toolbox = {
  kind: "flyoutToolbox",
  contents: [
    { kind: "block", type: "create_task" },
    { kind: "block", type: "set_deadline" },
    { kind: "block", type: "log_task" },
    { kind: "block", type: "calculate_eta" },
    { kind: "block", type: "end_workflow" }
  ]
};

window.onload = () => {
  workspace = Blockly.inject("blocklyDiv", { toolbox });

  document.getElementById("generate").onclick = () => {
    const code = generator.workspaceToCode(workspace);
    document.getElementById("rightPanel").textContent = code;
  };

  document.getElementById("run").onclick = () => {
    document.getElementById("output").textContent = "";
    const code = generator.workspaceToCode(workspace);
    new Function(code)();
  };

  document.getElementById("clear").onclick = () => {
    workspace.clear();
    document.getElementById("rightPanel").textContent = "// Generated JavaScript";
    document.getElementById("output").textContent = "// Output";
  };
};
