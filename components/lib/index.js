import ZDemo from './zdemo'
import ZCard from './zcard'

const components = {
    ZDemo,
    ZCard
}

const install = function(Vue){
    if(install.installed){
        return;
    }
    Object.keys(components).forEach(key=>{
        Vue.component(components[key].name, components[key]);
    });
}

const API = {
    install
}

export default API;