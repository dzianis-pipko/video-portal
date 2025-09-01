import { axiosClassic } from '@/api/axios'

import type { IDataVideo, IVideo } from '@/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	getAll(searchTerm?: string | null) {
		return axiosClassic.get<IDataVideo>(
			this._VIDEOS,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	getVideoGames() {
		return axiosClassic.get<IDataVideo>(`${this._VIDEOS}/games`)
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}

	getExplorerVideos() {
		return axiosClassic.get<IDataVideo>(`${this._VIDEOS}/explore`)
	}
}

export const videoService = new VideoService()
