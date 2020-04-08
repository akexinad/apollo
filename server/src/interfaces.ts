export interface ILaunch {
    id: string;
    site: string;
    mission: IMission;
    rockert: IRocket;
    isBooked: boolean;
}

export interface IRocket {
    id: string;
    name: string;
    type: string;
}

export interface IMission {
    name: string;
    missionPatch: (size: IPatchSize) => string;
}

export interface IUser {
    id: string;
    email: string;
    trips: Array<ILaunch>;
}

type IPatchSize = "SMALL" | "LARGE";