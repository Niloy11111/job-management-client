import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const useApplicants = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: applicantsInfo = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["applicantsInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/myEmployees");
      return res.data;
    },
  });

  return [applicantsInfo, loading, refetch];
};

export default useApplicants;
