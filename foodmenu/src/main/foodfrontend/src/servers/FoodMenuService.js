import axios from "axios";

const FOODMENU_REST_API_URL='http://localhost:8092/api/v1/foodmenu';

class FoodMenuService{
    getAllFoodMenu(){
        return axios.get(FOODMENU_REST_API_URL);
    }
    createFoodMenu(foodmenu){
        return axios.post(FOODMENU_REST_API_URL,foodmenu);
    }
    getFoodMenuById(foodmenuId){
        return axios.get(FOODMENU_REST_API_URL+"/"+foodmenuId)
    }
    updateFoodMenu(foodmenuId, foodmenu){
        return axios.put(FOODMENU_REST_API_URL+"/"+foodmenuId,foodmenu);
    }
    deleteFoodMenu(foodmenuId){
        return axios.delete(FOODMENU_REST_API_URL+"/"+foodmenuId);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new FoodMenuService();