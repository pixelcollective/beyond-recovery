import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import ActionPagePreview from './preview-templates/ActionPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerPreviewTemplate('action', ActionPagePreview)
