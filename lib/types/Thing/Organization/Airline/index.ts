import type { Text } from "../../../DataType/index.ts"
import type BoardingPolicyType from "../../Intangible/Enumeration/BoardingPolicyType/index.ts"
import type Organization from "../index.ts"

export default interface Airline extends Organization {
	/** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
	boardingPolicy?: BoardingPolicyType
	/** IATA identifier for an airline or airport. */
	iataCode?: Text
}
