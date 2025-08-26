import type { LucideProps } from 'lucide-react'
import type { ComponentType, ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: ComponentType<LucideProps>
	isH1?: boolean
}

const Heading = ({ children, Icon, isH1 = false }: Props) => {
	return (
		<div className='flex items-center gap-1.5 opacity-70 mb-4.5'>
			{Icon && <Icon className='text-primary' />}
			{isH1 && <h1 className='font-semibold text-lg'>{children}</h1>}
			{!isH1 && <h2 className='font-semibold text-lg'>{children}</h2>}
		</div>
	)
}

export default Heading
