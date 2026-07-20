// Central icon registry. Each entry is raw inline SVG markup from the
// `lucide-static` package. To add a new icon anywhere on the site, add
// its file name here (see node_modules/lucide-static/icons/ for the
// full list) and reference it by key via <Icon name="..." />.
import leaf from 'lucide-static/icons/leaf.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import clipboardList from 'lucide-static/icons/clipboard-list.svg?raw';
import fileText from 'lucide-static/icons/file-text.svg?raw';
import receipt from 'lucide-static/icons/receipt.svg?raw';
import calendarDays from 'lucide-static/icons/calendar-days.svg?raw';
import clock from 'lucide-static/icons/clock.svg?raw';
import repeat from 'lucide-static/icons/repeat.svg?raw';
import sprayCan from 'lucide-static/icons/spray-can.svg?raw';
import calculator from 'lucide-static/icons/calculator.svg?raw';
import settings from 'lucide-static/icons/settings.svg?raw';
import route from 'lucide-static/icons/route.svg?raw';
import trendingUp from 'lucide-static/icons/trending-up.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import smartphone from 'lucide-static/icons/smartphone.svg?raw';
import wifiOff from 'lucide-static/icons/wifi-off.svg?raw';
import lock from 'lucide-static/icons/lock.svg?raw';
import mail from 'lucide-static/icons/mail.svg?raw';
import check from 'lucide-static/icons/check.svg?raw';
import x from 'lucide-static/icons/x.svg?raw';
import languages from 'lucide-static/icons/languages.svg?raw';
import download from 'lucide-static/icons/download.svg?raw';
import star from 'lucide-static/icons/star.svg?raw';
import mapPin from 'lucide-static/icons/map-pin.svg?raw';
import badgeCheck from 'lucide-static/icons/badge-check.svg?raw';
import cloudOff from 'lucide-static/icons/cloud-off.svg?raw';
import menu from 'lucide-static/icons/list-checks.svg?raw';

// Brand logomarks (not part of lucide-static): official monochrome SVG path
// data from simple-icons (CC0), self-hosted here rather than pulled from a
// CDN. Used for the App Store / Google Play badges on the download page.
const appleLogo = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>`;
const googlePlayLogo = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>`;

export const icons = {
  leaf,
  users,
  'clipboard-list': clipboardList,
  'file-text': fileText,
  receipt,
  'calendar-days': calendarDays,
  clock,
  repeat,
  'spray-can': sprayCan,
  calculator,
  settings,
  route,
  'trending-up': trendingUp,
  'shield-check': shieldCheck,
  smartphone,
  'wifi-off': wifiOff,
  lock,
  mail,
  check,
  x,
  languages,
  download,
  star,
  'map-pin': mapPin,
  'badge-check': badgeCheck,
  'cloud-off': cloudOff,
  menu,
  'apple-logo': appleLogo,
  'google-play': googlePlayLogo,
};
