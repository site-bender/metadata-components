import type { Date, Text, URL } from "../../../DataType/index.ts"
import type CategoryCode from "../../Intangible/DefinedTerm/CategoryCode/index.ts"
import type LegalForceStatus from "../../Intangible/Enumeration/StatusEnumeration/LegalForceStatus/index.ts"
import type Organization from "../../Organization/index.ts"
import type Person from "../../Person/index.ts"
import type AdministrativeArea from "../../Place/AdministrativeArea/index.ts"
import type CreativeWork from "../index.ts"

export default interface Legislation extends CreativeWork {
	/** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
	jurisdiction?: AdministrativeArea | Text
	/** Another legislation that this legislation amends, introducing legal changes. */
	legislationAmends?: Legislation
	/** Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href="/legislationTransposes">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it. */
	legislationApplies?: Legislation
	/** Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href="/legislationConsolidates">legislationConsolidates</a> property. */
	legislationChanges?: Legislation
	/** Another legislation that this one sets into force. */
	legislationCommences?: Legislation
	/** Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change. */
	legislationConsolidates?: Legislation
	/** Another legislation in which this one introduces textual changes, like correction of spelling mistakes, with no legal impact (for modifications that have legal impact, use <a href="/legislationAmends">legislationAmends</a>). */
	legislationCorrects?: Legislation
	/** The person or organization that countersigned the legislation. Depending on the legal context, a countersignature can indicate that the signed authority undertakes to assume responsibility for texts emanating from a person who is inviolable and irresponsible, (for example a King, Grand Duc or President), or that the authority is in charge of the implementation of the text. */
	legislationCountersignedBy?: Organization | Person
	/** The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force. */
	legislationDate?: Date
	/** The date at which the Legislation becomes applicable. This can sometimes be distinct from the date of entry into force : a text may come in force today, and state it will become applicable in 3 months. */
	legislationDateOfApplicability?: Date
	/** The point-in-time at which the provided description of the legislation is valid (e.g.: when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015") */
	legislationDateVersion?: Date
	/** Indicates that this Legislation ensures the implementation of another Legislation, for example by modifying national legislations so that they do not contradict to an EU regulation or decision. This implies a legal meaning. Transpositions of EU Directive should be captured with <a href="/legislationTransposes">legislationTransposes</a>. */
	legislationEnsuresImplementationOf?: Legislation
	/** An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex. */
	legislationIdentifier?: URL | Text
	/** The jurisdiction from which the legislation originates. */
	legislationJurisdiction?: Text | AdministrativeArea
	/** Whether the legislation is currently in force, not in force, or partially in force. */
	legislationLegalForce?: LegalForceStatus
	/** The person or organization that originally passed or made the law: typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author. */
	legislationPassedBy?: Organization | Person
	/** Another legislation that this legislation repeals (cancels, abrogates). */
	legislationRepeals?: Legislation
	/** An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published. */
	legislationResponsible?: Organization | Person
	/** Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations. */
	legislationTransposes?: Legislation
	/** The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "règlement grand-ducal", etc., depending on the country. */
	legislationType?: CategoryCode | Text
}
