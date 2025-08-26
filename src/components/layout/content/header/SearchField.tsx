import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PUBLIC_PAGE } from '@/config/public-page.config'

const SearchField = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		e.preventDefault()
		if (searchTerm.trim() !== '') {
			router.push(PUBLIC_PAGE.SEARCH(searchTerm))
		}
	}

	return (
		<div className='w-1/3'>
			<input
				type='search'
				placeholder='Type to search'
				className='py-2 px-4 bg-transparent w-4/6 outline-none border-none shadow-none'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}

export default SearchField
