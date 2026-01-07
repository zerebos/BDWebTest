/**
 * @name ExamplePlugin
 * @author YourName
 * @description A basic example plugin to demonstrate BetterDiscord plugin structure and metadata format.
 * @version 1.0.0
 * @authorId 123456789012345678
 * @authorLink https://github.com/yourusername
 * @website https://github.com/yourusername/ExamplePlugin
 * @source https://github.com/yourusername/ExamplePlugin/blob/main/ExamplePlugin.plugin.js
 * @updateUrl https://raw.githubusercontent.com/yourusername/ExamplePlugin/main/ExamplePlugin.plugin.js
 */

module.exports = class ExamplePlugin {
    constructor() {
        this.initialized = false;
    }

    // Called when the plugin is loaded
    load() {
        console.log("ExamplePlugin loaded!");
    }

    // Called when the plugin is started
    start() {
        console.log("ExamplePlugin started!");
        this.initialized = true;
        
        // Example: Show a toast notification
        BdApi.showToast("ExamplePlugin has been enabled!", {type: "success"});
    }

    // Called when the plugin is stopped
    stop() {
        console.log("ExamplePlugin stopped!");
        this.initialized = false;
        
        // Example: Show a toast notification
        BdApi.showToast("ExamplePlugin has been disabled!", {type: "info"});
    }

    // Returns the plugin's name
    getName() {
        return "ExamplePlugin";
    }

    // Returns the plugin's description
    getDescription() {
        return "A basic example plugin to demonstrate BetterDiscord plugin structure and metadata format.";
    }

    // Returns the plugin's version
    getVersion() {
        return "1.0.0";
    }

    // Returns the plugin's author
    getAuthor() {
        return "YourName";
    }
}
