import type { Date, DateTime } from "../../../../DataType/index.ts"
import type Duration from "../../../Intangible/Quantity/Duration/index.ts"
import type QuantitativeValue from "../../../Intangible/StructuredValue/QuantitativeValue/index.ts"
import type WebPage from "../index.ts"

export default interface RealEstateListing extends WebPage {
	/** Publication date of an online listing. */
	datePosted?: Date | DateTime
	/** Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property. */
	leaseLength?: Duration | QuantitativeValue
}
