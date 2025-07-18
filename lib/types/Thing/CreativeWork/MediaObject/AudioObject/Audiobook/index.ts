import type Duration from "../../../../Intangible/Quantity/Duration/index.ts"
import type QuantitativeValue from "../../../../Intangible/StructuredValue/QuantitativeValue/index.ts"
import type Person from "../../../../Person/index.ts"
import type AudioObject from "../index.ts"

export default interface Audiobook extends AudioObject {
	/** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
	duration?: QuantitativeValue | Duration
	/** A person who reads (performs) the audiobook. */
	readBy?: Person
}
