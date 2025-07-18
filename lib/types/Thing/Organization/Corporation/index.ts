import type { Text } from "../../../DataType/index.ts"
import type Organization from "../index.ts"

export default interface Corporation extends Organization {
	/** The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO 15022. */
	tickerSymbol?: Text
}
