import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseJobs = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: allJobs = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allJobs");
      return res.data;
    },
  });

  return [allJobs, loading, refetch];
};

export default UseJobs;
