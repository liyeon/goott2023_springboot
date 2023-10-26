import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodMenuService from "../servers/FoodMenuService";

const ListComponent = (props) => {
  const [menuList, setMenuList] = useState([]);
  const getAllFoodMenu = () => {
    FoodMenuService.getAllFoodMenu()
      .then((response) => {
        setMenuList(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllFoodMenu();
  }, []);
  const deleteFoodMenu=(foodmenuId)=>{
    FoodMenuService.deleteFoodMenu(foodmenuId).then((response)=>{
        getAllFoodMenu();
    })
  }
  return (
    <main className="container py-5">
      <h2 className="text-center">Menu LIST!!</h2>
      <Link to="/insert" className="btn btn-success mb-2 fw-bold">
        메뉴 등록하기!
      </Link>
      <table className="table table-dark table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>번호</th>
            <th>메뉴</th>
            <th>종류</th>
            <th>가격</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {menuList.map((menuList) => (
            <tr key={menuList.fid}>
              <td>{menuList.fid}</td>
              <td>{menuList.fname}</td>
              <td>{menuList.ftype}</td>
              <td>{menuList.fprice} 원</td>
              <td>
                <Link
                  className="btn btn-warning"
                  to={`/update/${menuList.fid}`}
                >
                  수정
                </Link>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => deleteFoodMenu(menuList.fid)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ListComponent;
