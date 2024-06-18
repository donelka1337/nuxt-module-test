import { type UseFetchOptions } from 'nuxt/app';
import { type IAuthUser } from '@/types/Auth';
import { useAppPersistedStore } from '@/store/app';

export const useMyFetch = async (request: any, options?: UseFetchOptions<any>) => {
  const config = useRuntimeConfig();
  const { data, getSession } = useAuth();
  await getSession();
  const store = useAppPersistedStore();
  const currentCompany = computed(() => store.currentCompany);
  const user = data?.value?.user as IAuthUser;
  const headers = {
    ...options?.headers || {},
    Authorization: `Bearer ${user?.accessToken}`,
    'X-UCR-ID': currentCompany?.value?.id?.toString(),
  };
  return useFetch(request, { baseURL: config.public.baseURL, ...options, headers, watch: false, retry: 0 });
};
