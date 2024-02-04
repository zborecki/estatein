import { Capacitor } from '@capacitor/core';

export const getPlatform = () => Capacitor.getPlatform();

export const isAndroid = getPlatform() === 'android';
export const isIOS = getPlatform() === 'ios';
export const isWeb = getPlatform() === 'web';
