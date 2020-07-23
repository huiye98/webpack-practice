// 分离方法3：动态导入, 返回promise
function getComponent(){
  // /**/里面是内联注释，会用node.vm运行（沙盒，解析为json对象，用来设置webpack动态加载的配置项）
  return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ })=>{
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(err=> 'error occurred while loading!');
}

getComponent().then(component=>{
  document.body.appendChild(component);
})