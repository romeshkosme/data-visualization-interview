function CustomTable({data}: any) {
    return (
        <>
            <section className="custom-table">
                <div className="table-part-one">
                    <div className="table-cell table-header">
                        <span>Measure</span>
                    </div>
                    <div className="table-cell table-header">
                        <span>Mean</span>
                    </div>
                    <div className="table-cell table-header">
                        <span>Median</span>
                    </div>
                    <div className="table-cell table-header">
                        <span>Mode</span>
                    </div>
                </div>
                <div className="table-part-two">
                    {data && Object.keys(data).map((classType: any, index: number) => (
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
                            <div className="table-cell table-data">
                                <span>{data[classType]["mode"]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CustomTable;