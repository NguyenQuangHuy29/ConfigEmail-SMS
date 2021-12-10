import Home from "./components/Home"
import AddUser from "./components/user/AddUser"
export const routes = [
    { path: '/', name: 'homepage', component: Home },
    { path:'/user',name:'user', component: AddUser}
]