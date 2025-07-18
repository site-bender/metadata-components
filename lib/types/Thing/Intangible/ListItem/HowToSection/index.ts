import type { Text } from "../../../../DataType/index.ts"
import type CreativeWork from "../../../CreativeWork/index.ts"
import type ItemList from "../../ItemList/index.ts"
import type ListItem from "../index.ts"

export default interface HowToSection extends ListItem {
	/** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred). */
	steps?: Text | ItemList | CreativeWork
}
