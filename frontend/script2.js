import { receiveData } from "./script";
const sendBttn = document.querySelector('#sendValues');
sendBttn.addEventListener('click', updateDB)
const updateDB = () => {
    const values = receiveData();
    console.log(values);
}
export {updateDB}