import { StartFunc as StartFuncNavigation } from "./Navigation/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
// import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
    StartFuncNavigation();

    // let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDom });;
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then();
    };
};

StartFunc();