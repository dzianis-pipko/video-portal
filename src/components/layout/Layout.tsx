'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'

import styles from './Layout.module.scss'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsShowedSidebar(!isShowedSidebar)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				styles.initialSidebar,
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
				// !isShowedSidebar && styles.hidedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}

export default Layout
