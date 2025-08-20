import type { ISidebarItem } from '../sidebar.types'

import MenuItem from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

const SidebarMenu = ({ title, menu }: Props) => {
	return (
		<nav>
			{title && <div className='opacity-40 uppercase text-xs font-medium mb-3'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
					/>
				))}
			</ul>
		</nav>
	)
}

export default SidebarMenu
