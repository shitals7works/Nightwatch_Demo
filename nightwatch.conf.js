module.exports = {
    "src_folders" : ["tests"],
  
    "webdriver": {
      "server_path": "node_modules/.bin/chromedriver",
      "start_process": "true",
      "cli_args": [
        "--verbose"
      ],
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities" : {
          "browserName" : "chrome"
        }
      }
    }
  };
  
  