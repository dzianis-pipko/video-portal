import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PUBLIC_PAGE } from '@/config/public-page.config'

const Logo = () => {
	return (
		<Link
			href={PUBLIC_PAGE.HOME}
			className='inline-flex items-center gap-1.5'
		>
			<SquarePlay
				color='var(--color-primary)'
				size={29}
			/>
			<span className='font-medium text-xl'>Video portal</span>
		</Link>
	)
}

export default Logo
