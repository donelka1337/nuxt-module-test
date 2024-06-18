export default {
  SITE_EMAIL_HELP: 'help@zveno.io',
  DEVELOPED_URL: 'https://cubit.su/',
  MAX_WIDTH_PHOTO: 1920,
  MAX_HEIGHT_PHOTO: 1920,
  // При обновении файла с политикой конфиденциальности или куки, нужно обновить версию
  POLICY_VERSION: '1',
  INSPECTION_STATUS: {
    INSPECTION_NEEDED: { code: 'INSPECTION_NEEDED', icon: 'checklist', type: 'need-check' },
    INSPECTION_BEGINED: { code: 'INSPECTION_BEGINED', icon: 'time', type: 'started' },
    INSPECTION_COMPLETED: { code: 'INSPECTION_COMPLETED', icon: 'status-checkmark', type: 'success' },
    INSPECTION_REFUSED: { code: 'INSPECTION_REFUSED', icon: 'close-circle', type: 'inactive' },
    INSPECTION_BROKEN: { code: 'INSPECTION_BROKEN', icon: 'status-error', type: 'negative' },
    INSPECTION_NOT_CARRIED: { code: 'INSPECTION_NOT_CARRIED', icon: 'status-not-carried', type: 'inactive' },
  } as Record<string, { code: string, icon: string, type: string }>,

  REPAIR_STATUS: {
    OPEN: { code: 'OPEN', icon: 'status-open', type: 'inactive' },
    PROCESSING: { code: 'PROCESSING', icon: 'gear', type: 'need-check' },
    REJECTED: { code: 'REJECTED', icon: 'close-circle', type: 'negative' },
    CLOSED: { code: 'CLOSED', icon: 'status-checkmark', type: 'success' },
  } as Record<string, { code: string, icon: string, type: string }>,

  WEEK_DAYS: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  UTC: [
    { name: '(UTC +2) Калининградское время', value: 2 },
    { name: '(UTC +3) Московское время', value: 3 },
    { name: '(UTC +4) Самарское время', value: 4 },
    { name: '(UTC +5) Екатеринбургское время', value: 5 },
    { name: '(UTC  +6) Омское время', value: 6 },
    { name: '(UTC +7) Красноярское время', value: 7 },
    { name: '(UTC +8) Иркутское время', value: 8 },
    { name: '(UTC +9) Якутское время', value: 9 },
    { name: '(UTC +10) Владивостокское время', value: 10 },
    { name: '(UTC +11) Магаданское время', value: 11 },
    { name: '(UTC +12) Камчатское время', value: 12 },
  ],
  NOMENCLATURE: {
    filesCount: 4,
    documentsCode: 'nomenclature',
  },
  TECH_INSPECTION: {
    maxValue: 1000000,
    maxRecheckInterval: 100000,
    lastDay: new Date(2021, 0, 1),
  },
};
