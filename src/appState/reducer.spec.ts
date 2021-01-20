import { mocked } from "ts-jest/utils";
import { AppState } from "./AppState";
import { exams } from "./exams/exams";
import { reducer } from "./reducer";
import { user } from "./user/user";
import { examResponse } from "./examResponse/examResponse";
import { ExamsActionType } from "./exams/ExamsAction";
import { UserActionType } from "./user/UserAction";
import { ActivityLogActionType } from "./activityLog/ActivityLogAction";
import { activityLog } from "./activityLog/activityLog";
import { ExamResponseActionType } from "./examResponse/ExamResponseAction";

jest.mock("./user/user");
jest.mock("./exams/exams");
jest.mock("./activityLog/activityLog");
jest.mock("./examResponse/examResponse");

describe("Testing rootReducer", () => {
    beforeEach(() => {
        mocked(user).mockClear();
        mocked(exams).mockClear();
        mocked(activityLog).mockClear();
        mocked(examResponse).mockClear();
    });

    it("should call activityLog-reducer for ActivityLogActions", () => {
        const courseActions = Object.values(ActivityLogActionType);
        courseActions.forEach((action, index) => {
            reducer(new AppState(), {
                type: action,
            } as any);

            expect(exams).not.toBeCalled();
            expect(user).not.toBeCalled();

            expect(activityLog).toBeCalledTimes(index + 1);
        });
    });

    it("should call exam-reducer for ExamsActions", () => {
        const courseActions = Object.values(ExamsActionType);
        courseActions.forEach((action, index) => {
            reducer(new AppState(), {
                type: action,
            } as any);

            expect(activityLog).not.toBeCalled();
            expect(user).not.toBeCalled();

            expect(exams).toBeCalledTimes(index + 1);
        });
    });

    it("should call exam-reducer for ExamResponse", () => {
        const examRespActions = Object.values(ExamResponseActionType);
        examRespActions.forEach((action, index) => {
            reducer(new AppState(), {
                type: action,
            } as any);

            expect(activityLog).not.toBeCalled();
            expect(user).not.toBeCalled();

            expect(examResponse).toBeCalledTimes(index + 1);
        });
    });

    it("should call user-reducer for UserActions", () => {
        const userActions = Object.values(UserActionType);
        userActions.forEach((action, index) => {
            reducer(new AppState(), {
                type: action,
            } as any);

            expect(activityLog).not.toBeCalled();
            expect(exams).not.toBeCalled();

            expect(user).toBeCalledTimes(index + 1);
        });
    });

    it("should return unchanged state for unknown action", () => {
        reducer(new AppState(), {
            type: "unknown",
        } as any);

        expect(activityLog).not.toBeCalled();
        expect(exams).not.toBeCalled();
        expect(user).not.toBeCalled();
    });
});
