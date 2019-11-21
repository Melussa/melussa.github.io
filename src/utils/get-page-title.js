import defaultSettings from '@/settings'

const title = defaultSettings.title || '组件文档'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
