import type {
	BaseComponentProps,
	ExtractLevelProps,
} from "../../../../types/index.ts"
import type IntangibleProps from "../../../../types/Thing/Intangible/index.ts"
import type PaymentMethodProps from "../../../../types/Thing/PaymentMethod/index.ts"

import Intangible from "../index.tsx"

export type Props = BaseComponentProps<
	PaymentMethodProps,
	"PaymentMethod",
	ExtractLevelProps<PaymentMethodProps, IntangibleProps>
>

export default function PaymentMethod(
	{
		paymentMethodType,
		schemaType = "PaymentMethod",
		subtypeProperties = {},
		...props
	}: Props,
) {
	return (
		<Intangible
			{...props}
			schemaType={schemaType}
			subtypeProperties={{
				paymentMethodType,
				...subtypeProperties,
			}}
		/>
	)
}
