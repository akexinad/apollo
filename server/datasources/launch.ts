import { RESTDataSource } from "apollo-datasource-rest";

import { ILaunch } from "./interfaces";

export class LaunchAPI extends RESTDataSource {
    /**
     *
     */
    constructor() {
        super();
        this.baseURL = "https://api.spacexdata.com/v2/";
    }

    public getAllLaunches = async () => {
        const response = await this.get("launches");

        return Array.isArray(response)
            ? response.map((launch: ILaunch) => this.launchReducer(launch))
            : [];
    };

    private launchReducer = (launch: ILaunch) => {
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
}
