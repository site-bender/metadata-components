import type {
	BaseComponentProps,
	ExtractLevelProps,
} from "../../../../types/index.ts"
import type IntangibleProps from "../../../../types/Thing/Intangible/index.ts"
import type PermitProps from "../../../../types/Thing/Permit/index.ts"

import Intangible from "../index.tsx"

export type Props = BaseComponentProps<
	PermitProps,
	"Permit",
	ExtractLevelProps<PermitProps, IntangibleProps>
>

export default function Permit(
	{
		issuedBy,
		issuedThrough,
		permitAudience,
		validFor,
		validFrom,
		validIn,
		validUntil,
		schemaType = "Permit",
		subtypeProperties = {},
		...props
	}: Props,
) {
	return (
		<Intangible
			{...props}
			schemaType={schemaType}
			subtypeProperties={{
				issuedBy,
				issuedThrough,
				permitAudience,
				validFor,
				validFrom,
				validIn,
				validUntil,
				...subtypeProperties,
			}}
		/>
	)
}
