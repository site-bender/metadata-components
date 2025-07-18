import type { Number } from "../../../../DataType/index.ts"
import type Role from "../index.ts"

export default interface OrganizationRole extends Role {
	/** A number associated with a role in an organization, for example, the number on an athlete's jersey. */
	numberedPosition?: Number
}
