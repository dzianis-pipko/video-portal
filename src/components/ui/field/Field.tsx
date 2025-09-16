import cn from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
	registration: UseFormRegisterReturn
}

const Field = ({ label, error, registration, ...props }: Props) => {
	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-400 font-semibold mb-2'>{label}</span>
				<input
					className={cn(
						'w-full px-3 py-2 border rounded shadow-sm transition-colors-custom focus:outline-none focus:ring-0 focus:border-white bg-transparent',
						error ? 'border-red-500' : 'border-border'
					)}
					type='text'
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	)
}

export default Field
