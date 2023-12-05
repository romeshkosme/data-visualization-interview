import { useEffect, useState } from "react";
import { calculateGamma } from "../utils/common";
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
                prefix={"Gamma"}
            />
        </>
    )
}

export default Gamma;