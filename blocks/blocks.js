// CREATE TASK
Blockly.Blocks["create_task"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Create Task")
      .appendField(new Blockly.FieldTextInput("My Task"), "TASK_NAME")
      .appendField("Priority")
      .appendField(
        new Blockly.FieldDropdown([
          ["Low", "LOW"],
          ["Medium", "MEDIUM"],
          ["High", "HIGH"]
        ]),
        "PRIORITY"
      );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};

// SET DEADLINE
Blockly.Blocks["set_deadline"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set Deadline (days)")
      .appendField(new Blockly.FieldNumber(3, 1), "DAYS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
  }
};

// LOG TASK
Blockly.Blocks["log_task"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Log Task Details");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
  }
};

// CALCULATE ETA
Blockly.Blocks["calculate_eta"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Calculate ETA");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
  }
};

// END WORKFLOW
Blockly.Blocks["end_workflow"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("End Workflow");
    this.setPreviousStatement(true);
    this.setColour(0);
  }
};

