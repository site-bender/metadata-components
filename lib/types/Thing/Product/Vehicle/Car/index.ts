import type { Text } from "../../../../DataType/index.ts"
import type QuantitativeValue from "../../../Intangible/StructuredValue/QuantitativeValue/index.ts"
import type Vehicle from "../index.ts"

export default interface Car extends Vehicle {
	/** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
	acrissCode?: Text
	/** The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges. */
	roofLoad?: QuantitativeValue
}
