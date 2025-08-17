import type { PropsWithChildren } from 'react'

import Header from './header/Header'

const Content = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<div>
			<Header />
			<section>{children}</section>
		</div>
	)
}

export default Content
