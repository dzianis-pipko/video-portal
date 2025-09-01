import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import Heading from '@/ui/Heading'
import VideoItem from '@/ui/video-item/VideoItem'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import Explore from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video portal',
	description: 'Best video portal',
	alternates: {
		canonical: PUBLIC_PAGE.HOME
	},
	openGraph: {
		type: 'website',
		url: PUBLIC_PAGE.HOME,
		title: 'Video portal'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	console.log('trendingVideos ', trendingVideos)

	return (
		<section>
			{!!trendingVideos.length && (
				<section className='mb-5'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid-5-cols'>
						{trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}

			<Explore />
		</section>
	)
}
