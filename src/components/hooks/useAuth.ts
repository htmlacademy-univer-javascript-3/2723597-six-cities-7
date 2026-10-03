import { useEffect, useState } from 'react';
import { authApi } from '../api/api';
import { IAuthData } from '../types/auth';

export const useAuth = () => {
  const [user, setUser] = useState<IAuthData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    authApi
      .getAuthStatus()
      .then((data) => {
        setUser(data);
        setIsAuth(true);
      })
      .catch(() => {
        setUser(null);
        setIsAuth(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { user, isAuth, isLoading };
};
