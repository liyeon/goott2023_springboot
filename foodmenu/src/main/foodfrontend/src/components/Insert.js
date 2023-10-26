import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FoodMenuService from "../servers/FoodMenuService";
const InsertComponent = (props) => {
  const [fname, setFname] = useState("");
  const [ftype, setFtype] = useState("");
  const [fprice, setFprice] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  // const saveFoodMenu = (e) => {
  //   e.preventDefault();
  //   const foodmenu = { fname, ftype, fprice };

  //   FoodMenuService.createFoodMenu(foodmenu)
  //     .then((response) => {
  //       console.log(response.data);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const saveOrUpdateFoodMenu = (e) => {
    e.preventDefault();
    const foodmenu = { fname, ftype, fprice };

    if(id){
      FoodMenuService.updateFoodMenu(id,foodmenu)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      FoodMenuService.createFoodMenu(foodmenu)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };
  useEffect(()=>{
    FoodMenuService.getFoodMenuById(id).then((response)=>{
      setFname(response.data.fname);
      setFtype(response.data.ftype);
      setFprice(response.data.fprice);
    }).catch((error)=>{
      console.log(error);
    });
  },[id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">메뉴 수정하기!</h2>;
    } else {
      return <h2 className="text-center">메뉴 등록하기!</h2>;
    }
  };

  const btn = () => {
    if (id) {
      return "수정하기";
    } else {
      return "등록하기";
    }
  };
  return (
    <main className="container py-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 py-3">
          {title()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">음식 이름</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="메뉴의 이름을 입력해주세요!"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">음식 종류</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="메뉴의 종류를 입력해주세요!"
                  name="ftype"
                  value={ftype}
                  onChange={(e) => setFtype(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">가격</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="메뉴의 가격을 입력해주세요!"
                  name="fprice"
                  value={fprice}
                  onChange={(e) => setFprice(e.target.value)}
                />
              </div>
              <button
                className="btn btn-success btn-sm"
                onClick={(e) => saveOrUpdateFoodMenu(e)}
              >
                {btn()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InsertComponent;
