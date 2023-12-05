import React, { useEffect, useState } from "react";
import { calculateFlavanoid } from "../utils/func";
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