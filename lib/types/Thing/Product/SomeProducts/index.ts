import type QuantitativeValue from "../../Intangible/StructuredValue/QuantitativeValue/index.ts"
import type Product from "../index.ts"

export default interface SomeProducts extends Product {
	/** The current approximate inventory level for the item or items. */
	inventoryLevel?: QuantitativeValue
}
