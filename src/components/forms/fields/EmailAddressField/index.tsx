import LabelWrapper from "~components/forms/composites/LabelWrapper/index.tsx"
import Input from "~components/forms/elements/Input/index.tsx"

import createElement from "~utilities/createElement/index.ts"
import generateShortId from "~utilities/generateShortId/index.ts"

export type Props = JSX.LabelHTMLAttributes<HTMLLabelElement> & {
	help?: string
	inputAttributes?: Omit<
		JSX.InputHTMLAttributes<HTMLInputElement>,
		"placeholder"
	>
	label?: string
	name?: string
	required?: boolean
}

export default function EmailAddressField({
	help = "Enter your email address",
	id = generateShortId(),
	inputAttributes = {},
	label = "Email Address",
	name = "email-address",
	required = false,
	...props
}: Props) {
	return (
		<LabelWrapper
			classes={["form-field", "email-address-field"]}
			help={help}
			id={id}
			label={label}
			{...props}
		>
			<Input
				type="email"
				id={id}
				name={name}
				required={required}
				{...inputAttributes}
			/>
		</LabelWrapper>
	)
}
