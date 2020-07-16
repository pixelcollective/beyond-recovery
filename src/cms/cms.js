import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import ActionPagePreview from './preview-templates/ActionPreview'
import PostPreview from './preview-templates/PostPreview'
import PressPreview from './preview-templates/PressPreview'
import PagePreview from './preview-templates/PagePreview'
import TrainingPreview from './preview-templates/TrainingPreview'
import ToolPreview from './preview-templates/ToolPreview'

CMS.registerMediaLibrary(uploadcare)

/**
 * Preview templates
 */
CMS.registerPreviewTemplate('action', ActionPagePreview)
CMS.registerPreviewTemplate('post', PostPreview)
CMS.registerPreviewTemplate('press', PressPreview)
CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('tool', ToolPreview)
CMS.registerPreviewTemplate('training', TrainingPreview)
