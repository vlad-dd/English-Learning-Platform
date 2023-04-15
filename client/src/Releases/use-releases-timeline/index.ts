import { useQuery } from "@apollo/client";
import { GET_RELEASES_TIMELINE } from "../graphql";

export const useReleasesTimeLineWidget = () => {
    const { data, error, loading } = useQuery(GET_RELEASES_TIMELINE);

    return { data, isLoading: loading, error};
}

