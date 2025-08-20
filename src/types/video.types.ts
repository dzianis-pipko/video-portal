import type { IChannel } from './channel.types'

export interface IVideo {
	id: string
	// publicId: string
	title: string
	slug: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	maxResolution: string
	viewsCount: number
	isPublic: boolean
	channel: IChannel
	channelId: string
	// likes
	// comments
	// tags
	createdAt: string
	// updatedAt
	// playlists
	// watchHistories
}
