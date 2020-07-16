import {combineReducers} from "redux";
import uiReducer from "./ui"
import newReducer from "./newsReducer";
import videoLearningReducer from "./videoLearningReducer";
import classSubjectReducer from "./classSubjectReducer";
import memberReducer from "./memberReducer";
import questionReducer from "./questionReducer";
import examReducer from "./examReducer";
const rootReducer = combineReducers({
    ui:uiReducer,
    newReducer:newReducer,
    videoLearningReducer:videoLearningReducer,
    classSubjectReducer:classSubjectReducer,
    memberReducer:memberReducer,
    questionReducer:questionReducer,
    examReducer:examReducer,
})
export default rootReducer;