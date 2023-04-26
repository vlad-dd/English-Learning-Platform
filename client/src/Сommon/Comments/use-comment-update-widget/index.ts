import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { size } from "lodash";
import { ADD_COMMENT } from "../graphql";
import * as selector from '../../../store/selectors';
import { successMessage } from "../../../utils/utils";

const useCommentUpdatingWidget = (refetch: () => void, collection: string, document: string)  => {
    const [comment, setComment] = useState<string>('');
    const [mutateFunction, { loading, error }] = useMutation(ADD_COMMENT);
    const { email } = useSelector(selector.registeredUser);
  
    useEffect(() => {
      if (size(comment) && !error) {
        (async () => {
          try {
            await mutateFunction({ variables: { collection, id: document, comment, email } })
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

export default useCommentUpdatingWidget;