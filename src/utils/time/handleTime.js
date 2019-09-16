
//时间处理
export  const   timeHandle = (time) => {

    const relTime = Date.now() - time
    const date = new Date(time)
    console.log(relTime)
    if((relTime/1000)<60){
        return Math.floor(relTime/1000) + '秒前' 
    }else if ((relTime/1000/60/60)<60){
        return Math.floor(relTime/1000/60) + '分钟前'
    }else if ((relTime/1000/60/60/24)<1){
        return Math.floor(relTime/1000/60/60) + '小时前'
    }else if ((relTime/1000/60/60/24/30)<1){
        return Math.floor(relTime/1000/60/60/24) + '天前'
    }else{
        return date.getMonth + '-' + date.getDate
    }
}