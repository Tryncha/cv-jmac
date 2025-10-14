import { useContext } from 'react';
import SettingsContext from '../context/SettingsContext';

export function useSettings() {
  const settingsContext = useContext(SettingsContext);

  if (!settingsContext) {
    throw new Error('useSettings must be used within a SettinsProvider');
  }
  return settingsContext;
}
