import { type IAuthUser } from '@/types/Auth';

type IType = 'any-of' | 'all';

export const useCan = (permission: (string | string[]), type: IType = 'any-of') => {
  if (!permission) return false;

  const { data } = useAuth();
  const user = data?.value?.user as IAuthUser;
  const permissions = user?.permissions?.map(item => item.toUpperCase());

  if (!permissions) return false;
  if (typeof permission === 'string') return permissions.includes(permission.trim().toUpperCase());
  if (Array.isArray(permission)) {
    if (!permissions.length) return false;
    switch (type) {
      case 'any-of':
        return permission.some(i => permissions.includes(i.trim().toUpperCase()));
      case 'all':
        return permission.every(i => permissions.includes(i.trim().toUpperCase()));
      default:
        return permission.some(i => permissions.includes(i.trim().toUpperCase()));
    }
  }
};
