module.exports = {
  parseDate: function(para) {
    para = para.replace(/(%20|,)+/g, ' ').replace(/\s+/g, ' ');
    var arr = para.split(' ');
    var res = {}; // js obj to return
    if(arr.length > 1){
        var a = new Date(para);
        if(checkDate(a)){
            var uDate = a.getTime()/1000;
            res.unix = uDate;
            res.natural = parseUnixDate(uDate)
        }else{
            res.unix = null;
            res.natural = null;
        }
    }else{
        var uDate = arr[0];
        var natural = parseUnixDate(uDate);
        res.natural = natural;
        res.unix = (natural == null) ? null : uDate;
    }
    return res;
  }
};
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function parseUnixDate(uDate){
    var a = new Date(uDate*1000);
    console.log(a);
    if(checkDate(a)){
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        return month + " " + date + ", " + year;    
    }else{
        return null;
    }
    
}

function checkDate(date){
    if(isNaN(date.getTime()) == false){
        return true;
    }else{
        return false;
    }
}