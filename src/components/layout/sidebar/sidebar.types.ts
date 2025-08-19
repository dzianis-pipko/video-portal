import type { LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'

export interface ISidebarItem {
	icon: ComponentType<LucideProps>
	label: string
	link: string
	isBottomBorder?: boolean
}

export interface ISidebarSubItem {
	avatar: string
	label: string
	link: string
	isLiveNow?: boolean
	isRecentUpload?: boolean
}
