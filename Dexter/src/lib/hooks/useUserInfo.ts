import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/auth.service";
import { useAuthStore } from "../store/global.store";

const useUserInfo = () => {
  const { accessToken } = useAuthStore();

  const { data: user, isPending: loading } = useQuery({
    queryFn: () => getUser(),
    queryKey: ["user"],
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 60,
  });

  return { user, loading };
};

export default useUserInfo;
