import { DEFAULT_SETTINGS } from '../constants';
import type { Settings } from '../types.d';

export function getSettingsFromStorage() {
  const savedSettings = localStorage.getItem('settings');

  if (!savedSettings) {
    return DEFAULT_SETTINGS;
  }

  return JSON.parse(savedSettings) as Settings;
}

export function saveSettingsInStorage(newSettings: Settings) {
  localStorage.setItem('settings', JSON.stringify(newSettings));
}
