import type {
	BaseComponentProps,
	ExtractLevelProps,
} from "../../../../../types/index.ts"
import type AmpStoryProps from "../../../../../types/Thing/AmpStory/index.ts"
import type MediaObjectProps from "../../../../../types/Thing/MediaObject/index.ts"

import MediaObject from "../index.tsx"

// AmpStory adds no properties to the MediaObject schema type
export type Props = BaseComponentProps<
	AmpStoryProps,
	"AmpStory",
	ExtractLevelProps<AmpStoryProps, MediaObjectProps>
>

export default function AmpStory({
	schemaType = "AmpStory",
	subtypeProperties = {},
	...props
}: Props) {
	return (
		<MediaObject
			{...props}
			schemaType={schemaType}
			subtypeProperties={subtypeProperties}
		/>
	)
}
