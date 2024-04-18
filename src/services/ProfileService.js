import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ProfileService {
    async getProfile(profileId) {
        const response = await api.get(`api/profiles/${profileId}`)
        AppState.activeProfile = null
        logger.log('getting id based profile', response.data)
        AppState.activeProfile = new Profile(response.data)
    }

}

export const profileService = new ProfileService()