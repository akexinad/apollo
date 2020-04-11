import { RESTDataSource } from "apollo-datasource-rest";
import { ILaunch, ILaunchReducer } from "./interfaces";

export default class LaunchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.spacexdata.com/v2/";
    }

    private async getAllLaunches() {
        const response = await this.get("launches");
        return Array.isArray(response) ? response.map(launch => this.launchReducer(launch)) : [];
    }

    private launchReducer = (launch: ILaunch): ILaunchReducer => {
        return {
            id: launch.flight_number || 0,
            cursor: `${launch.launch_date_unix}`,
            site: launch.launch_site && launch.launch_site.site_name,
            mission: {
                name: launch.mission_name,
                missionPatchSmall: launch.links.mission_patch_small,
                missionPatchLarge: launch.links.mission_patch
            },
            rocket: {
                id: launch.rocket.rocket_id,
                name: launch.rocket.rocket_name,
                type: launch.rocket.rocket_type
            }
        };
    };

    private getLaunchById = async (launchId: ILaunch["flight_number"]): Promise<ILaunchReducer> => {
        const response = await this.get("launches", { flightNumber: launchId });

        return this.launchReducer(response[0]);
    };

    private getLaunchesByIds = (launchIds: Array<ILaunch["flight_number"]>): Promise<Array<ILaunchReducer>> => {
        return Promise.all(launchIds.map(launchId => this.getLaunchById(launchId)));
    };
}
