import type { Language } from "../../../bcp47/index.ts"
import type { Text, URL } from "../../../DataType/index.ts"
import type Thing from "../../index.ts"
import type Duration from "../../Intangible/Quantity/Duration/index.ts"
import type QuantitativeValue from "../../Intangible/StructuredValue/QuantitativeValue/index.ts"
import type Organization from "../../Organization/index.ts"
import type PerformingGroup from "../../Organization/PerformingGroup/index.ts"
import type MusicGroup from "../../Organization/PerformingGroup/MusicGroup/index.ts"
import type Person from "../../Person/index.ts"
import type Country from "../../Place/AdministrativeArea/Country/index.ts"
import type CreativeWork from "../index.ts"
import type { CreativeWorkProps } from "../index.ts"
import type VideoObject from "../MediaObject/VideoObject/index.ts"

export interface MovieProps {
	/** An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
	actor?: PerformingGroup | Person
	/** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
	actors?: Person
	/** The country of origin of something, including products as well as creative  works such as movie and TV content.  In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.  In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here. */
	countryOfOrigin?: Country
	/** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
	director?: Person
	/** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
	directors?: Person
	/** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
	duration?: QuantitativeValue | Duration
	/** The composer of the soundtrack. */
	musicBy?: MusicGroup | Person
	/** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
	productionCompany?: Organization
	/** Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47). */
	subtitleLanguage?: Language | Text
	/** An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.  For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].  Since schema.org types like [[Movie]], [[TVEpisode]], [[TVSeason]], and [[TVSeries]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description. */
	titleEIDR?: Text | URL
	/** The trailer of a movie or TV/radio series, season, episode, etc. */
	trailer?: VideoObject
}

type Movie =
	& Thing
	& CreativeWorkProps
	& MovieProps

export default Movie
