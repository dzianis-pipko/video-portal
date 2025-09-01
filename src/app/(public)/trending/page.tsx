import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import Heading from '@/ui/Heading'
import VideoItem from '@/ui/video-item/VideoItem'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Best Trending',
	alternates: {
		canonical: PUBLIC_PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.TRENDING,
		title: 'Trending'
	}
}

export default async function Page() {
	const videos = await videoService.getTrendingVideos()

	console.log('videos ', videos.data.length)

	return (
		<section className='mb-5'>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='grid-5-cols'>
				{videos.data.length &&
					videos.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))}
				{!videos.data.length && <div className=''>Trends are temporarily unavailable</div>}
			</div>
		</section>
	)
}
