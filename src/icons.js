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
};
