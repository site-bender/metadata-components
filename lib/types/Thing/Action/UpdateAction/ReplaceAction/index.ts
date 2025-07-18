import type Thing from "../../../../index.ts"
import type UpdateAction from "../index.ts"

export default interface ReplaceAction extends UpdateAction {
	/** A sub property of object. The object that is being replaced. */
	replacee?: Thing
	/** A sub property of object. The object that replaces. */
	replacer?: Thing
}
