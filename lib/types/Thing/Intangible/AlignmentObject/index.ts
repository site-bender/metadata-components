import type { Text, URL } from "../../../DataType/index.ts"
import type Intangible from "../index.ts"

export default interface AlignmentObject extends Intangible {
	/** A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'. */
	alignmentType?: Text
	/** The framework to which the resource being described is aligned. */
	educationalFramework?: Text
	/** The description of a node in an established educational framework. */
	targetDescription?: Text
	/** The name of a node in an established educational framework. */
	targetName?: Text
	/** The URL of a node in an established educational framework. */
	targetUrl?: URL
}
