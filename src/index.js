// 分离方法3：动态导入, 返回promise
async function getComponent(){
    const element = document.createElement('div');
    const {default:_} = await import(/* webpackChunkName: "lodash" */'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

getComponent().then(component=>{
  document.body.appendChild(component);
})