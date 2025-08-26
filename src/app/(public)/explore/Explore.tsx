'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import Heading from '@/ui/Heading'
import SceletonLoader from '@/ui/SceletonLoader'
import VideoItem from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export default function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explorer'],
		queryFn: () => videoService.getExplorerVideos()
	})

	console.log('data ', data)

	return (
		<section>
			<Heading Icon={Compass}>Explore</Heading>
			<div className='grid grid-cols-5 gap-6'>
				{isLoading ? (
					<SceletonLoader
						count={6}
						className='h-36 rounded-md'
					/>
				) : (
					!!data?.data.videos.length &&
					data.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				)}
			</div>
		</section>
	)
}
