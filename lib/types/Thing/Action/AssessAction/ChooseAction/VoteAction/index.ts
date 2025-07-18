import type Person from "../../../../Person/index.ts"
import type ChooseAction from "../index.ts"

export default interface VoteAction extends ChooseAction {
	/** A sub property of object. The candidate subject of this action. */
	candidate?: Person
}
