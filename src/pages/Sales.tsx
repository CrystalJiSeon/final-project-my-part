import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from '../components/TableComponent';

function Sales(props) {
    const [condition, setCondtion] =useState();
    const [cols, setCols] =useState([
        {key:"store", label:"매장번호"},
        {key:"date", label:"날짜"},
        {key:"sale", label:"매출"}
    ]);
    const [data, setData] =useState([

    ]);
    const [store, setStore]=useState([1,2,3]);

    const selectCondition=(e)=>{
        e.prevent.default();
    }



    return (
        <>
            <div id="selectCondition">
                <Nav variant="tabs" defaultActiveKey="/sales/all">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/sales/all" onClick={selectCondition}>전체 일매출</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/sales/yearly" onClick={selectCondition}>전체 매장 연매출</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/sales/monthly" onClick={selectCondition} >전체 매장 월매출</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/sales/bystore" onClick={(e)=>{e.preventDefault()}}>
                            <select  name="" id="">
                                <option>---지점을 선택하세요---</option>
                                {store.map(item=><option>{item} 호점</option>)}
                            </select>
                        </Nav.Link>
                     
                    </Nav.Item>
                </Nav>
            </div>
            <div id="storeSale">
                <TableComponent columns={cols} data={data}/>
            </div>
        </>
    );
}

export default Sales;