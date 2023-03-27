import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { database } from "../../authentification/firebase"
import { setTenseConfiguration } from "../../store/reducers/tenses"

const useDatabase = (path: string) => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [requestError, setError] = useState(false);
    const collectionRef = collection(database, path)

    useEffect(() => {
        (async function() {
            try {
                setLoading(true);
                const data = await getDocs(collectionRef)
                dispatch(setTenseConfiguration(data.docs.map((doc) => ({...doc.data(), id: doc.id}))))
            }
            catch(error: any) {
                setError(error)
            }
            finally{
                setLoading(false);
            }
        })()
    }, [path])

    return { isLoading, requestError }
}

export default useDatabase;