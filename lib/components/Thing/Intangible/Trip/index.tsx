import type {
	BaseComponentProps,
	ExtractLevelProps,
} from "../../../../types/index.ts"
import type IntangibleProps from "../../../../types/Thing/Intangible/index.ts"
import type TripProps from "../../../../types/Thing/Trip/index.ts"

import Intangible from "../index.tsx"

export type Props = BaseComponentProps<
	TripProps,
	"Trip",
	ExtractLevelProps<TripProps, IntangibleProps>
>

export default function Trip(
	{
		arrivalTime,
		departureTime,
		itinerary,
		offers,
		partOfTrip,
		provider,
		subTrip,
		tripOrigin,
		schemaType = "Trip",
		subtypeProperties = {},
		...props
	}: Props,
) {
	return (
		<Intangible
			{...props}
			schemaType={schemaType}
			subtypeProperties={{
				arrivalTime,
				departureTime,
				itinerary,
				offers,
				partOfTrip,
				provider,
				subTrip,
				tripOrigin,
				...subtypeProperties,
			}}
		/>
	)
}
