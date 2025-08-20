import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PUBLIC_PAGE } from '@/config/public-page.config'

const SidebarHeader = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='opacity-60 hover:opacity-100 transition-opacity-custom cursor-pointer'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>

			<Link
				href={PUBLIC_PAGE.HOME}
				className='flex items-center gap-1.5'
			>
				<SquarePlay
					color='var(--color-primary)'
					size={29}
				/>
				<span className='font-medium text-xl'>Video portal</span>
			</Link>
		</div>
	)
}

export default SidebarHeader
