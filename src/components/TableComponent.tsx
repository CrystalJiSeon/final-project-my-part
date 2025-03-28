

function TableComponent({columns,data}) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(col=><th key={col.key}>{col.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>
                <tr key={index}>
                    {columns.map((item)=><td key={item.key}>{row[item.key]}</td>)}
                </tr>
            )}
            </tbody>
        </table>      
    );
}
export default TableComponent;  