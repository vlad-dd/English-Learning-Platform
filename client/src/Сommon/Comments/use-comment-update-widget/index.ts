import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { size } from "lodash";
import { ADD_COMMENT } from "../graphql";
import { successMessage } from "../../../utils/utils";
import * as selector from '../../../store/selectors';
import { SYSTEM_FEEDBACK_MESSAGES } from "../../constants";

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
            successMessage(SYSTEM_FEEDBACK_MESSAGES.SUCCESS)
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
     };
}

export default useCommentUpdatingWidget;