import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const useApplicants = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: applicantsInfo = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["applicantsInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("/myEmployees");
      return res.data;
    },
  });

  return [applicantsInfo, loading, refetch];
};

export default useApplicants;
