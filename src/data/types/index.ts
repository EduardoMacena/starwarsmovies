export enum InputEnunType {
    'email',
    'password'
}

/**
 * This is equivalent to:
 * type ScreensStrings = 'email' | 'password' ;
 */
export type InputStringType = keyof typeof InputEnunType;

export enum LabelEnunType {
    'default',
    'error'
}

/**
 * This is equivalent to:
 * type LabelStrings = 'default' | 'error' ;
 */
export type LabelStringType = keyof typeof LabelEnunType;