import { Log, UserManager, settings } from "./sample-settings";
import { log } from "./sample";

Log.logger = console;
Log.level = Log.DEBUG;

new UserManager(settings).signinCallback().then(function(user) {
    log("signin response success", user);
    window.location = "http://localhost:3001/code-flow-identityserver/sample.html"
}).catch(function(err) {
    console.error(err);
    log(err);
});
