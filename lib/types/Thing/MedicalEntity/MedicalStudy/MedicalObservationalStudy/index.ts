import type MedicalObservationalStudyDesign from "../../../Intangible/Enumeration/MedicalEnumeration/MedicalObservationalStudyDesign/index.ts"
import type MedicalStudy from "../index.ts"

export default interface MedicalObservationalStudy extends MedicalStudy {
	/** Specifics about the observational study design (enumerated). */
	studyDesign?: MedicalObservationalStudyDesign
}
