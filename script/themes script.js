const oceanBackgroundDarkerShade = '#1A237E';
const oceanBackgroundLighterShade = '#1E88E5';
const oceanButtonText = '#E3F2FD';
const oceanButtonHover = '#64B5F6';
const oceanButtonFocusOutline = '#4B87B7';
const oceanFooterBackground = '#263238';
const oceanFooterButtonBackground = '#546E7A';
const oceanWeatherButtonBackgroundColor = '#00695C';
const oceanWeatherButtonBorderColor = '#004D40';
const oceanWeatherButtonTextColor = '#ffffff';

const darkBackgroundDarkerShade = '#1A237E';
const darkBackgroundLighterShade = '#1E88E5';
const darkButtonText = '#E3F2FD';
const darkButtonHover = '#64B5F6';
const darkButtonFocusOutline = '#4B87B7';
const darkFooterBackground = '#263238';
const darkFooterButtonBackground = '#546E7A';
const darkWeatherButtonBackgroundColor = '#00695C';
const darkWeatherButtonBorderColor = '#004D40';
const darkWeatherButtonTextColor = '#ffffff';

const whiteBackgroundDarkerShade = '#1A237E';
const whiteBackgroundLighterShade = '#1E88E5';
const whiteButtonText = '#E3F2FD';
const whiteButtonHover = '#64B5F6';
const whiteButtonFocusOutline = '#4B87B7';
const whiteFooterBackground = '#263238';
const whiteFooterButtonBackground = '#546E7A';
const whiteWeatherButtonBackgroundColor = '#00695C';
const whiteWeatherButtonBorderColor = '#004D40';
const whiteWeatherButtonTextColor = '#ffffff';

function ChangeTheme(theme)
{
    if(theme == 'ocean')
    {
        document.documentElement.style.setProperty('--background-darker-shade', oceanBackgroundDarkerShade);
        document.documentElement.style.setProperty('--background-lighter-shade', oceanBackgroundLighterShade);
        document.documentElement.style.setProperty('--button-text', oceanButtonText);
        document.documentElement.style.setProperty('--button-hover', oceanButtonHover);
        document.documentElement.style.setProperty('--button-focus-outline', oceanButtonFocusOutline);
        document.documentElement.style.setProperty('--footer-background', oceanFooterBackground);
        document.documentElement.style.setProperty('--footer-button-background', oceanFooterButtonBackground);
        document.documentElement.style.setProperty('--weather-button-background-color', oceanWeatherButtonBackgroundColor);
        document.documentElement.style.setProperty('--weather-button-border-color', oceanWeatherButtonBorderColor);
        document.documentElement.style.setProperty('--weather-button-text-color', oceanWeatherButtonTextColor);
    }
    if(theme == 'dark')
    {
        document.documentElement.style.setProperty('--background-darker-shade', darkBackgroundDarkerShade);
        document.documentElement.style.setProperty('--background-lighter-shade', darkBackgroundLighterShade);
        document.documentElement.style.setProperty('--button-text', darkButtonText);
        document.documentElement.style.setProperty('--button-hover', darkButtonHover);
        document.documentElement.style.setProperty('--button-focus-outline', '');
        document.documentElement.style.setProperty('--footer-background', '');
        document.documentElement.style.setProperty('--footer-button-background', '');
        document.documentElement.style.setProperty('--weather-button-background-color', '');
        document.documentElement.style.setProperty('--weather-button-border-color', '');
        document.documentElement.style.setProperty('--weather-button-text-color', '');
    }
    if(theme == 'white')
    {
        document.documentElement.style.setProperty('--background-darker-shade', '');
        document.documentElement.style.setProperty('--background-lighter-shade', '');
        document.documentElement.style.setProperty('--button-text', '');
        document.documentElement.style.setProperty('--button-hover', '');
        document.documentElement.style.setProperty('--button-focus-outline', '');
        document.documentElement.style.setProperty('--footer-background', '');
        document.documentElement.style.setProperty('--footer-button-background', '');
        document.documentElement.style.setProperty('--weather-button-background-color', '');
        document.documentElement.style.setProperty('--weather-button-border-color', '');
        document.documentElement.style.setProperty('--weather-button-text-color', '');
    }
}