import { FindOrCreateOptions, QueryInterface, QueryOptions, TruncateOptions } from "sequelize";

export interface ILaunch {
    flight_number: number;
    launch_date_unix: string;
    launch_site: {
        site_name: string;
    };
    mission_name: string;
    links: {
        mission_patch_small: string;
        mission_patch: string;
    };
    rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
    };
}

export interface ILaunchReducer {
    id: number;
    cursor: string;
    site: string;
    mission: {
        name: string;
        missionPatchSmall: string;
        missionPatchLarge: string;
    };
    rocket: {
        id: string;
        name: string;
        type: string;
    };
}

interface ISQLModel<Model> {
    findOrCreate: (options: FindOrCreateOptions) => Model;
    destroy: (options: FindOrCreateOptions) => Model;
}

export interface IUser {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailArg: any;
    token: string;
}

export interface IStore {
    users: ISQLModel<Array<IUser>>;
}

export interface IContext {
    store: IStore
    user: IUser;
}
