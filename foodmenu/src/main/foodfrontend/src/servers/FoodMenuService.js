import axios from "axios";

const FOODMENU_REST_API_URL='http://localhost:8092/api/v1/foodmenu';

class FoodMenuService{
    getAllFoodMenu(){
        return axios.get(FOODMENU_REST_API_URL);
    }
    createFoodMenu(foodmenu){
        return axios.post(FOODMENU_REST_API_URL,foodmenu);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new FoodMenuService();