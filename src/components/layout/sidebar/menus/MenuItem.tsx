import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
}

export const MenuItem = ({ item }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className='group py-2 flex items-center gap-5'
			>
				<item.icon className='group-hover:text-primary transition-all-custom group-hover:rotate-6 min-w-6' />
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] w-full block bg-border my-5'></span>}
		</li>
	)
}

export default MenuItem
