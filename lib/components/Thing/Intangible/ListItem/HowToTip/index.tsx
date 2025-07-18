import type {
	BaseComponentProps,
	ExtractLevelProps,
} from "../../../../../types/index.ts"
import type HowToTipProps from "../../../../../types/Thing/HowToTip/index.ts"
import type ListItemProps from "../../../../../types/Thing/ListItem/index.ts"

import ListItem from "../index.tsx"

// HowToTip adds no properties to the ListItem schema type
export type Props = BaseComponentProps<
	HowToTipProps,
	"HowToTip",
	ExtractLevelProps<HowToTipProps, ListItemProps>
>

export default function HowToTip({
	schemaType = "HowToTip",
	subtypeProperties = {},
	...props
}: Props) {
	return (
		<ListItem
			{...props}
			schemaType={schemaType}
			subtypeProperties={subtypeProperties}
		/>
	)
}
