import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export const MenuItem = ({ item, isActive }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className='group py-2 flex items-center gap-5'
			>
				<item.icon
					className={cn('min-w-6', {
						'group-hover:text-primary transition-all-custom group-hover:rotate-6': !isActive,
						'text-primary': isActive
					})}
				/>
				<span
					className={cn('border-b', { 'border-white': isActive, 'border-transparent': !isActive })}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] w-full block bg-border my-5'></span>}
		</li>
	)
}

export default MenuItem
