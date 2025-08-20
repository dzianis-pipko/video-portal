import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../sidebar.types'

import MenuItem from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

const SidebarMenu = ({ title, menu }: Props) => {
	const pathname = usePathname()

	return (
		<nav>
			{title && <div className='opacity-40 uppercase text-xs font-medium mb-3'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}

export default SidebarMenu
