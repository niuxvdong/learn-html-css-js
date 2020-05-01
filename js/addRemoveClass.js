 // 添加类
 function addClass(element, className){
    var classNames = element.className.split(' ');
    for(var i = 0; i < classNames.length; i++){
        if(classNames[i] === className){
            break;
        }
    }
    // 没找到则添加进去
    if(i === classNames.length){
        if(element.className === ''){
            element.className += className;
        }else{
            element.className += ' ' + className;
        }
    }
}

// 删除类
function removeClass(element, className){
    var classNames = element.className.split(' ');
    for(var i = 0; i < classNames.length; i++){
        if(classNames[i] === className){
            break;
        }
    }
    // 找到了
    if(i !== classNames.length){
        // 切掉当前要删属性值
        classNames.splice(i, 1);
        // 按空格分开
        element.className = classNames.join(' ');
    }
    // 没找到不需要删除
}
