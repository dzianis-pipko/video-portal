import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Auth from './Auth'

export const metadata: Metadata = {
	title: 'Search',
	...NO_INDEX_PAGE // эта страница не индексируется
}
const AuthPage = () => {
	return <Auth />
}

export default AuthPage
