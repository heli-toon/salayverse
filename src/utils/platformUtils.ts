import { Platform } from '../types';

// Function to detect the user's operating system
export const detectUserPlatform = (): Platform => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  if (userAgent.includes('android')) {
    return 'Android';
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'iOS';
  } else if (platform.includes('win')) {
    return 'Win';
  } else if (platform.includes('mac')) {
    return 'Mac';
  } else if (platform.includes('linux')) {
    return 'Linux';
  } else if (userAgent.includes('cros')) {
    return 'Chromebk';
  } else {
    // Default to Web if we can't determine
    return 'Webapp';
  }
};

// Function to get platform display name
export const getPlatformDisplayName = (platform: Platform): string => {
  const displayNames: Record<Platform, string> = {
    Win: 'Windows',
    Mac: 'macOS',
    Linux: 'Linux',
    AndroidTV: 'Android TV',
    Android: 'Android',
    iOS: 'iOS',
    BrowserExt: 'Browser Extension',
    Webapp: 'Web App',
    Script: 'Script',
    SourceCode: 'Source Code',
    Chromebk: 'Chromebook'
  };

  return displayNames[platform] || platform;
};

// Function to get platform icon
export const getPlatformIcon = (platform: Platform): string => {
  switch (platform) {
    case 'Win':
      return 'windows';
    case 'Mac':
      return 'apple';
    case 'Linux':
      return 'terminal';
    case 'Android':
    case 'AndroidTV':
      return 'android';
    case 'iOS':
      return 'smartphone';
    case 'BrowserExt':
      return 'browser';
    case 'Webapp':
      return 'globe';
    case 'Script':
      return 'file-code';
    case 'SourceCode':
      return 'github';
    case 'Chromebk':
      return 'chrome';
    default:
      return 'download';
  }
};