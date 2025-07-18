import type { Text, URL } from "../../../../DataType/index.ts"
import type QualitativeValue from "../../Enumeration/QualitativeValue/index.ts"
import type StructuredValue from "../index.ts"
import type QuantitativeValue from "../QuantitativeValue/index.ts"

export default interface EngineSpecification extends StructuredValue {
	/** The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \n\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges. */
	engineDisplacement?: QuantitativeValue
	/** The power of the vehicle's engine.     Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\n\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see  [http://en.wikipedia.org/wiki/Horsepower#Engine\_power\_test\_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges. */
	enginePower?: QuantitativeValue
	/** The type of engine or engines powering the vehicle. */
	engineType?: QualitativeValue | Text | URL
	/** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle. */
	fuelType?: QualitativeValue | URL | Text
	/** The torque (turning force) of the vehicle's engine.\n\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\n\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges. */
	torque?: QuantitativeValue
}
