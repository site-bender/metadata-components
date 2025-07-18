import type { Language } from "../../../../bcp47/index.ts"
import type {
	Boolean,
	DateTime,
	Number,
	Text,
	Time,
} from "../../../../DataType/index.ts"
import type Audience from "../../../Intangible/Audience/index.ts"
import type Rating from "../../../Intangible/Rating/index.ts"
import type LocationFeatureSpecification from "../../../Intangible/StructuredValue/PropertyValue/LocationFeatureSpecification/index.ts"
import type QuantitativeValue from "../../../Intangible/StructuredValue/QuantitativeValue/index.ts"
import type LocalBusiness from "../index.ts"

export default interface LodgingBusiness extends LocalBusiness {
	/** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
	amenityFeature?: LocationFeatureSpecification
	/** An intended audience, i.e. a group for whom something was created. */
	audience?: Audience
	/** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
	availableLanguage?: Text | Language
	/** The earliest someone may check into a lodging establishment. */
	checkinTime?: DateTime | Time
	/** The latest someone may check out of a lodging establishment. */
	checkoutTime?: DateTime | Time
	/** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
	numberOfRooms?: QuantitativeValue | Number
	/** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
	petsAllowed?: Boolean | Text
	/** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
	starRating?: Rating
}
