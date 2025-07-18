import type CategoryCode from "../../../Intangible/DefinedTerm/CategoryCode/index.ts"
import type DefinedTermSet from "../index.ts"

export default interface CategoryCodeSet extends DefinedTermSet {
	/** A Category code contained in this code set. */
	hasCategoryCode?: CategoryCode
}
