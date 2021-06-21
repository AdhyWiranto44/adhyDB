const execSync = require('child_process').execSync;

const arg = process.argv;
switch(arg[2]) {
    case "make_database":
        execSync(`node -e 'require("./app").makeDatabase("${arg[3]}")'`, {stdio:[0, 1, 2]});
        break;
    case "make_collection":
        execSync(`node -e 'require("./app").makeCollection("${arg[3]}", "${arg[4]}")'`, {stdio:[0, 1, 2]});
        break;
    case "drop_collection":
        execSync(`node -e 'require("./app").dropCollection("${arg[3]}", "${arg[4]}")'`, {stdio:[0, 1, 2]});
        break;
    default:
        console.log("Command unavailable!");
}