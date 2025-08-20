import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import type { IVideo } from '@/types/video.types'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

const VideoItem = ({ video, Icon }: Props) => {
	return (
		<div>
			<div>
				<Link href={PUBLIC_PAGE.VIDEO(video.slug)}>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
					/>
				</Link>
				<Link href={PUBLIC_PAGE.CHANNEL(video.channel.slug)}>
					<Image
						src={video.channel.avatarUrl}
						width={30}
						height={30}
						alt={video.channel.name}
					/>
				</Link>
			</div>

			<div>
				<div>{Icon && <Icon />}</div>
				<div></div>
			</div>
		</div>
	)
}

export default VideoItem
