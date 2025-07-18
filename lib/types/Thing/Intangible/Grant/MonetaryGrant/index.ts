import type { Number } from "../../../../DataType/index.ts"
import type Organization from "../../../Organization/index.ts"
import type Person from "../../../Person/index.ts"
import type MonetaryAmount from "../../StructuredValue/MonetaryAmount/index.ts"
import type Grant from "../index.ts"

export default interface MonetaryGrant extends Grant {
	/** The amount of money. */
	amount?: Number | MonetaryAmount
	/** A person or organization that supports (sponsors) something through some kind of financial contribution. */
	funder?: Organization | Person
}
