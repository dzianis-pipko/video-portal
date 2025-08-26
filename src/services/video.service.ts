import axios from 'axios'

import type { IDataVideo, IVideo } from '@/types/video.types'

class VideoService {
	getAll(searchTerm?: string | null) {
		return axios.get<IDataVideo>(
			'http://localhost:4200/api/videos',
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	getTrendingVideos() {
		return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending')
	}

	getExplorerVideos() {
		return axios.get<IDataVideo>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()
