import { useEffect, useState } from "react";
import { calculateFlavanoid } from "../utils/common";
import CustomTable from "./Table";

function Flavanoids() {
    const [flavanoids, setFlavanoids]: any = useState(null);
    useEffect(() => {
        setFlavanoids(calculateFlavanoid());
    }, []);
    return(
        <>
           <CustomTable
                data={flavanoids}
           />
        </>
    )
}

export default Flavanoids;