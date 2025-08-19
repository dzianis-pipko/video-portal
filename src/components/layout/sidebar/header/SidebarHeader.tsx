import { Menu, SquarePlay } from 'lucide-react'

const SidebarHeader = () => {
	return (
		<div>
			<button>
				<Menu />
			</button>

			<span>
				<SquarePlay />
				<span>Video portal</span>
			</span>
		</div>
	)
}

export default SidebarHeader
