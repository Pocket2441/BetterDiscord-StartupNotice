/**
 * @name Startup Notice
 * @author Pocket#2441
 * @description Display A notice for when discord loads; based on the BD Example code
 * @version 0.0.1
 */

module.exports = class MyPlugin {
  constructor(meta) {
    // Do stuff in here before starting
  }


  start() {
    // Do stuff when enabled
 console.log("Discord is Ready to use")
BdApi.showNotice("Discord is Ready to use");
  }


  stop() {
    // Cleanup when disabled
  }
};
