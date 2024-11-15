import {NAVIGATION_LINKS} from '../constants'
import {useTranslation} from 'react-i18next'

export const useIntlNavigationLinks = () => {
  const {t} = useTranslation()

  return NAVIGATION_LINKS.map(({label, href}) => ({
    label: t(`constants.navigation.${label}`),
    href,
  }))
}
