import type {
	BaseComponentProps,
	ExtractLevelProps,
} from "../../../types/index.ts"
import type ThingProps from "../../../types/Thing/index.ts"
import type PersonProps from "../../../types/Thing/Person/index.ts"

import Thing from "../index.tsx"

export type Props = BaseComponentProps<
	PersonProps,
	"Person",
	ExtractLevelProps<PersonProps, ThingProps>
>

export default function Person(
	{
		additionalName,
		address,
		affiliation,
		agentInteractionStatistic,
		alumniOf,
		award,
		awards,
		birthDate,
		birthPlace,
		brand,
		callSign,
		children,
		colleague,
		colleagues,
		contactPoint,
		contactPoints,
		deathDate,
		deathPlace,
		duns,
		email,
		familyName,
		faxNumber,
		follows,
		funder,
		funding,
		gender,
		givenName,
		globalLocationNumber,
		hasCertification,
		hasCredential,
		hasOccupation,
		hasOfferCatalog,
		hasPOS,
		height,
		homeLocation,
		honorificPrefix,
		honorificSuffix,
		interactionStatistic,
		isicV4,
		jobTitle,
		knows,
		knowsAbout,
		knowsLanguage,
		makesOffer,
		memberOf,
		naics,
		nationality,
		netWorth,
		owns,
		parent,
		parents,
		performerIn,
		pronouns,
		publishingPrinciples,
		relatedTo,
		seeks,
		sibling,
		siblings,
		skills,
		sponsor,
		spouse,
		taxID,
		telephone,
		vatID,
		weight,
		workLocation,
		worksFor,
		schemaType = "Person",
		subtypeProperties = {},
		...props
	}: Props,
) {
	return (
		<Thing
			{...props}
			schemaType={schemaType}
			subtypeProperties={{
				additionalName,
				address,
				affiliation,
				agentInteractionStatistic,
				alumniOf,
				award,
				awards,
				birthDate,
				birthPlace,
				brand,
				callSign,
				children,
				colleague,
				colleagues,
				contactPoint,
				contactPoints,
				deathDate,
				deathPlace,
				duns,
				email,
				familyName,
				faxNumber,
				follows,
				funder,
				funding,
				gender,
				givenName,
				globalLocationNumber,
				hasCertification,
				hasCredential,
				hasOccupation,
				hasOfferCatalog,
				hasPOS,
				height,
				homeLocation,
				honorificPrefix,
				honorificSuffix,
				interactionStatistic,
				isicV4,
				jobTitle,
				knows,
				knowsAbout,
				knowsLanguage,
				makesOffer,
				memberOf,
				naics,
				nationality,
				netWorth,
				owns,
				parent,
				parents,
				performerIn,
				pronouns,
				publishingPrinciples,
				relatedTo,
				seeks,
				sibling,
				siblings,
				skills,
				sponsor,
				spouse,
				taxID,
				telephone,
				vatID,
				weight,
				workLocation,
				worksFor,
				...subtypeProperties,
			}}
		/>
	)
}
