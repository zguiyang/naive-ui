import { changeColor } from 'seemly'
import { buttonDark } from '../../button/styles'
import { progressDark } from '../../progress/styles'
import { commonDark } from '../../_styles/new-common'
import type { UploadTheme } from './light'

const uploadDark: UploadTheme = {
  name: 'Upload',
  common: commonDark,
  peers: {
    Button: buttonDark,
    Progress: progressDark
  },
  self (vars) {
    const {
      iconColorOverlay,
      primaryColor,
      errorColor,
      textColor2,
      successColor,
      opacityDisabled,
      actionColorOverlay,
      borderColor,
      hoverColorOverlay,
      lineHeight,
      borderRadius,
      fontSize
    } = vars
    return {
      fontSize,
      lineHeight,
      borderRadius,
      draggerColor: actionColorOverlay,
      draggerBorder: `1px dashed ${borderColor}`,
      draggerBorderHover: `1px dashed ${primaryColor}`,
      itemColorHover: hoverColorOverlay,
      itemColorHoverError: changeColor(errorColor, {
        alpha: 0.09
      }),
      itemTextColor: textColor2,
      itemTextColorError: errorColor,
      itemTextColorSuccess: successColor,
      itemIconColor: iconColorOverlay,
      itemDisabledOpacity: opacityDisabled
    }
  }
}

export default uploadDark