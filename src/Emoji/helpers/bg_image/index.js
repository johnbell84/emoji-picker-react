import { DEFAULT_CDN_PATH, DEFAULT_IMAGE_RESOLUTION } from '../../../constants';

export default function bgImage({ unified, assetPath, emojiResolution, urlGenerator }) {

    if (typeof assetPath === 'undefined') {
        assetPath = DEFAULT_CDN_PATH;
    }

    const url = urlGenerator ? 
        urlGenerator(assetPath, emojiResolution || DEFAULT_IMAGE_RESOLUTION, unified) :
        `${assetPath}/${emojiResolution ? emojiResolution : DEFAULT_IMAGE_RESOLUTION}/${unified}.png`;

    return {
        'backgroundImage': `url(${url})`
    };
}