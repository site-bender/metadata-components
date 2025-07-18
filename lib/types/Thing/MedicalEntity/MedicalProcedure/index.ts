import type { Text } from "../../../DataType/index.ts"
import type MedicalProcedureType from "../../Intangible/Enumeration/MedicalEnumeration/MedicalProcedureType/index.ts"
import type MedicalStudyStatus from "../../Intangible/Enumeration/MedicalEnumeration/MedicalStudyStatus/index.ts"
import type EventStatusType from "../../Intangible/Enumeration/StatusEnumeration/EventStatusType/index.ts"
import type MedicalEntity from "../index.ts"

export default interface MedicalProcedure extends MedicalEntity {
	/** Location in the body of the anatomical structure. */
	bodyLocation?: Text
	/** Typical or recommended followup care after the procedure is performed. */
	followup?: Text
	/** How the procedure is performed. */
	howPerformed?: Text
	/** Typical preparation that a patient must undergo before having the procedure performed. */
	preparation?: Text | MedicalEntity
	/** The type of procedure, for example Surgical, Noninvasive, or Percutaneous. */
	procedureType?: MedicalProcedureType
	/** The status of the study (enumerated). */
	status?: MedicalStudyStatus | Text | EventStatusType
}
