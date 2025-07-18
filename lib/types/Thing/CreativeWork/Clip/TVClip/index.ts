import type TVSeries from "../../../Intangible/Series/CreativeWorkSeries/TVSeries/index.ts"
import type Clip from "../index.ts"

export default interface TVClip extends Clip {
	/** The TV series to which this episode or season belongs. */
	partOfTVSeries?: TVSeries
}
