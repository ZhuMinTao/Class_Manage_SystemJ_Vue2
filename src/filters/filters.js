 export default{
    formatDate:(date)=>{
        if (date != null) {
            const dateMat = new Date(date);
            const year = dateMat.getFullYear();
            const month = (dateMat.getMonth() + 1 < 10 ? "0" + (dateMat.getMonth() + 1) : dateMat.getMonth() + 1);
            const day = dateMat.getDate() < 10 ? "0" + dateMat.getDate() : dateMat.getDate();
            const  h = dateMat.getHours()
            const m = dateMat.getMinutes()
            const timeFormat =
                year + '年' + month + '月' + day + '日 ' + h + '时' + m +'分';
            return timeFormat;
        }
    },
    formatDHHM:(date)=>{
        if (date != null) {
            const dateMat = new Date(date);
            const month = (dateMat.getMonth() + 1 < 10 ? "0" + (dateMat.getMonth() + 1) : dateMat.getMonth() + 1);
            const day = dateMat.getDate() < 10 ? "0" + dateMat.getDate() : dateMat.getDate();
            const  h = dateMat.getHours()
            const m = dateMat.getMinutes()
            const timeFormat =
                month + '月' + day + '日' + h + '时' + m +'分';
            return timeFormat;
        }
    },
    formatYMD:(date)=>{
        if (date != null) {
            const dateMat = new Date(date);
            const year = dateMat.getFullYear();
            const month = (dateMat.getMonth() + 1 < 10 ? "0" + (dateMat.getMonth() + 1) : dateMat.getMonth() + 1);
            const day = dateMat.getDate() < 10 ? "0" + dateMat.getDate() : dateMat.getDate();
            const timeFormat =
                year + '年' + month + '月' + day + '日'
            return timeFormat;
        }
    }

} 