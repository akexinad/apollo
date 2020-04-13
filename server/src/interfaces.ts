export interface IQuereable {
    id: string;
}

export interface ILaunch extends IQuereable {
    site: string;
    mission: IMission;
    rocket: IRocket;
    isBooked: boolean;
}

export interface IRocket extends IQuereable {
    name: string;
    type: string;
}

export interface IUser extends IQuereable {
    email: string;
    trips: Array<ILaunch>;
}

export interface IMission {
    name: string;
    missionPatch: (size: IPatchSize) => string;
}

export type IPatchSize = "SMALL" | "LARGE";

export type IQuery<IQuereable> = (parent: any, args: IArgs, context: IContext, info: any) => IQuereable;

export interface IParent {}

export interface IArgs {
    id: IQuereable["id"];
}

export interface IInfo {}

export interface IContext {
    dataSources: {
        launchAPI: {
            getAllLaunches: () => Array<ILaunch>;
            getLaunchById: (launchInfo: { launchId: ILaunch["id"] }) => ILaunch;
        };
        userAPI: {
            findOrCreateUser: () => IUser;
        };
    };
}

export interface IInfo {}

export interface IResolver {
    Query: {
        launches: IQuery<Array<ILaunch>>;
        launch: IQuery<ILaunch>;
        me: IQuery<IUser>;
    };
}
