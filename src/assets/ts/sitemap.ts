import { type IMenuItem } from '@/types/App';

export const mainMenu: IMenuItem[] = [
  { index: '/objects', text: 'Справочник объектов', icon: 'objects-grid', testId: 'objects', permission: 'read_nomenclature' },
  { index: '/objects-control', text: 'Управление объектами', icon: 'objects-to-inspect', testId: 'objects-control', permission: 'read_nomenclature' },
  { index: '/checklists', text: 'Чек-листы', icon: 'checklist', testId: 'checklists', permission: 'read_template' },
  { index: '/inspections', text: 'Мои осмотры', icon: 'my-checkups', testId: 'my-checkups', permission: 'read_check_list' },
  { index: '/types', text: 'Типы осмотров', icon: 'types', testId: 'types', permission: 'read_type_inspection' },
  {
    index: '/repair-request',
    text: 'Заявки на ремонт',
    icon: 'wrench',
    testId: 'repair-request',
    permission: ['read_repair_requests', 'read_all_repair_requests', 'read_hierarchy_repair_requests'],
  },
  {
    text: 'Справочники',
    icon: 'catalog',
    testId: 'dictionary',
    children: [
      { index: '/users', text: 'Пользователи', icon: 'users', testId: 'users', permission: 'read_user' },
      { index: '/user-groups', text: 'Группы пользователей', icon: 'group', testId: 'user-groups', permission: 'read_user_groups' },
      { index: '/roles', text: 'Роли пользователей', icon: 'key', testId: 'roles', permission: 'read_roles' },
      { index: '/companies', text: 'Организации', icon: 'tree-structure', testId: 'companies', permission: 'read_company' },
    ],
  },
  { index: '/history', text: 'История осмотров', icon: 'history', testId: 'history', permission: 'read_history_inspection' },
  { index: '/subscriptions', text: 'Настройка уведомлений', icon: 'subscription', testId: 'subscription', permission: 'read_subscription' },
];
