import { formatDistanceToNow } from 'date-fns'

function getTimeAgo(date){
    if(date){
        return formatDistanceToNow(new Date(date))
    }
}

export{
    getTimeAgo
}