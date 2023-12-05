import { useEffect, useState } from "react";
import { calculateGamma } from "../utils/func";
import CustomTable from "./Table";

function Gamma() {
    const [gammas, setGammas]: any = useState(null);
    useEffect(() => {
        setGammas(calculateGamma());
    }, []);
    return(
        <>
            <CustomTable
                data={gammas}
            />
        </>
    )
}

export default Gamma;