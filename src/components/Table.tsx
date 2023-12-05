function CustomTable({data, prefix}: any) {
    const keys = data && Object.keys(data).map((elem) => +elem)
    return (
        <>
            <section className="custom-table">
                <div className="table-part-one">
                    <div className="table-cell table-header">
                        <span>Measure</span>
                    </div>
                    <div className="table-cell table-header">
                        <span>{prefix} Mean</span>
                    </div>
                    <div className="table-cell table-header">
                        <span>{prefix} Median</span>
                    </div>
                    <div className="table-cell table-header">
                        <span>{prefix} Mode</span>
                    </div>
                </div>
                <div className="table-part-two">
                    {keys && keys.map((classType: number, index: number) => (
                        <div key={`class-column class-${index}`}>
                            <div className="table-cell table-header">
                                <span>Class {classType}</span>
                            </div>
                            <div className="table-cell table-data">
                                <span>{data[classType]["mean"]}</span>
                            </div>
                            <div className="table-cell table-data">
                                <span>{data[classType]["median"]}</span>
                            </div>
                            <div className="table-cell table-data cell-ellipses" title={data[classType]["mode"].join(", ")}>
                                <span>{data[classType]["mode"].join(", ")}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CustomTable;