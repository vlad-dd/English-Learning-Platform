import { useMutation } from "@apollo/client";
import { size } from "lodash";
import { useEffect, useState } from "react";
import { successMessage } from "../../../utils";
import { ADD_COMMENT } from "../graphql";

const useUpdate = (refetch: () => void, path1: string, path2: string)  => {
    const [comment, setComment] = useState<string>('');
    const [mutateFunction, { loading, error }] = useMutation(ADD_COMMENT);
  
    useEffect(() => {
      if (size(comment)) {
        (async () => {
          try {
            await mutateFunction({ variables: { collection: path1, id: path2, comment } })
            await refetch()
            successMessage('Comment has been added!')
          }
          catch (error) {
            setComment("")
          }
          finally {
            setComment("")
          }
        })()
      }
    }, [comment])
  
    const addComment = (html: string) => {
      setComment(html)
    }

    return { 
        isLoading: loading,
        error,
        addComment
     }
}

export default useUpdate;